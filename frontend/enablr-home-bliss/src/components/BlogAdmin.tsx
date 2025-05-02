import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSeedBlogPosts } from "@/hooks/useSeedBlogPosts";
import { supabase } from "@/integrations/supabase/client";
import { AlertCircle, RefreshCw, Trash2, Database } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const BlogAdmin = () => {
  const { toast } = useToast();
  const seedBlogPostsMutation = useSeedBlogPosts();
  const [isLoading, setIsLoading] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [showDebugPanel, setShowDebugPanel] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<'untested' | 'success' | 'error'>('untested');
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [operation, setOperation] = useState<'seed' | 'delete' | null>(null);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);

  // Add debug log
  const addLog = (message: string) => {
    setDebugLogs(prev => [...prev, `${new Date().toISOString().split('T')[1].split('.')[0]} - ${message}`]);
  };

  // Test database connection
  const testConnection = async () => {
    setIsLoading(true);
    setErrorDetails(null);
    addLog("Testing database connection...");
    
    try {
      const { data, error, status } = await supabase
        .from('blog_posts')
        .select('count', { count: 'exact', head: true });
        
      if (error) {
        addLog(`Connection error (${status}): ${error.message}`);
        setErrorDetails(`Connection error: ${error.message}\nCode: ${error.code}\nDetails: ${error.details || 'None'}`);
        setConnectionStatus('error');
        toast({
          title: "Connection Failed",
          description: `Could not connect to database: ${error.message}`,
          variant: "destructive",
        });
      } else {
        addLog(`Connection successful (${status}). Table exists.`);
        setConnectionStatus('success');
        toast({
          title: "Connection Successful",
          description: "Successfully connected to the Supabase database",
        });
      }
    } catch (err: any) {
      addLog(`Unexpected error: ${err.message || String(err)}`);
      setErrorDetails(`Unexpected error: ${err.message || String(err)}`);
      setConnectionStatus('error');
      toast({
        title: "Connection Failed",
        description: "An unexpected error occurred while testing the connection",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Delete all blog posts
  const clearBlogPosts = async () => {
    addLog("Starting delete operation...");
    setIsLoading(true);
    setErrorDetails(null);
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

      if (error) {
        addLog(`Delete error: ${error.message}`);
        setErrorDetails(`Delete error: ${error.message}\nCode: ${error.code}\nDetails: ${error.details || 'None'}`);
        toast({
          title: "Error",
          description: `Failed to delete blog posts: ${error.message}`,
          variant: "destructive",
        });
      } else {
        addLog("Successfully deleted all blog posts");
        toast({
          title: "Success",
          description: "All blog posts have been deleted",
        });
      }
    } catch (err: any) {
      addLog(`Unexpected error during delete: ${err.message || String(err)}`);
      setErrorDetails(`Unexpected error: ${err.message || String(err)}`);
      toast({
        title: "Error",
        description: "An unexpected error occurred while deleting posts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle seed blog posts
  const handleSeed = async () => {
    addLog("Starting seed operation...");
    setErrorDetails(null);
    try {
      await seedBlogPostsMutation.mutateAsync();
      addLog("Seed operation completed successfully");
    } catch (error: any) {
      addLog(`Seed error: ${error.message || String(error)}`);
      setErrorDetails(`${error.message || String(error)}`);
    }
  };

  // Check Supabase connection on mount
  useEffect(() => {
    // We don't auto-test to avoid unnecessary API calls
    addLog("Component mounted, debug panel visible. Please test connection before seeding or deleting.");
  }, []);

  // Handle operation confirmation
  const handleOperationConfirm = () => {
    if (operation === 'seed') {
      handleSeed();
    } else if (operation === 'delete') {
      clearBlogPosts();
    }
    setIsConfirmDialogOpen(false);
  };

  // Start operation with confirmation
  const startOperation = (op: 'seed' | 'delete') => {
    setOperation(op);
    setIsConfirmDialogOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-background border"
          onClick={() => setShowDebugPanel(!showDebugPanel)}
        >
          {showDebugPanel ? "Hide Debug" : "Show Debug"}
        </Button>
        
        <Button
          onClick={() => startOperation('seed')}
          disabled={isLoading || seedBlogPostsMutation.isPending}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {(isLoading || seedBlogPostsMutation.isPending) ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Seeding...
            </>
          ) : (
            "Seed Blog Posts"
          )}
        </Button>
      </div>

      {showDebugPanel && (
        <div className="fixed bottom-4 left-4 w-96 max-h-96 overflow-auto bg-background border rounded-md shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Debug Panel</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowDebugPanel(false)}>
              Close
            </Button>
          </div>

          <div className="flex space-x-2 mb-4">
            <Button 
              size="sm" 
              variant="outline"
              onClick={testConnection}
              disabled={isLoading}
              className="flex items-center"
            >
              <Database className="mr-2 h-4 w-4" />
              Test Connection
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => startOperation('delete')}
              disabled={isLoading}
              className="flex items-center text-destructive border-destructive hover:bg-destructive/10"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete All Posts
            </Button>
          </div>

          <div className="space-y-2">
            {connectionStatus !== 'untested' && (
              <div className={`text-sm ${connectionStatus === 'success' ? 'text-green-500' : 'text-red-500'} mb-2`}>
                Connection: {connectionStatus === 'success' ? 'Successful' : 'Failed'}
              </div>
            )}
            
            {errorDetails && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="whitespace-pre-wrap text-xs">
                  {errorDetails}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Logs:</h4>
              <div className="bg-muted p-2 rounded text-xs font-mono h-32 overflow-y-auto">
                {debugLogs.length > 0 ? (
                  debugLogs.map((log, index) => (
                    <div key={index} className="mb-1">{log}</div>
                  ))
                ) : (
                  <div className="text-muted-foreground">No logs yet</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {operation === 'seed' ? 'Seed Blog Posts' : 'Delete All Posts'}
            </DialogTitle>
            <DialogDescription>
              {operation === 'seed' 
                ? 'This will replace all existing blog posts with sample data. Are you sure you want to continue?'
                : 'This will permanently delete all blog posts. Are you sure you want to continue?'
              }
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant={operation === 'delete' ? 'destructive' : 'default'}
              onClick={handleOperationConfirm}
            >
              {operation === 'seed' ? 'Seed Posts' : 'Delete All'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogAdmin; 