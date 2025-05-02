# How to Fix Row Level Security (RLS) Issue

You're experiencing an error when seeding blog posts: `new row violates row-level security policy for table "blog_posts"`.

## Solution Options

### Option 1: Adjust RLS Policy in Supabase Dashboard

1. Go to the [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Table Editor** → **blog_posts**
4. Go to **Authentication** → **Policies**
5. Add a new policy for INSERT operations:

```sql
-- Example policy to allow inserts for authenticated users
CREATE POLICY "Enable inserts for authenticated users" 
ON blog_posts 
FOR INSERT 
TO authenticated 
USING (true);

-- OR allow anonymous inserts (less secure, only for development)
CREATE POLICY "Enable inserts for anon users" 
ON blog_posts 
FOR INSERT 
TO anon 
USING (true);
```

### Option 2: Authenticate in Your Application

Since your app is using the anonymous client, you can authenticate it with a service role (for admin functions) or implement auth for users:

```typescript
// In BlogAdmin.tsx, you can use service role for admin operations
// (Add to your .env file first and use environment variables - don't commit this key!)
const SUPABASE_SERVICE_ROLE_KEY = "your-service-role-key";

const adminClient = createClient(
  "https://kivxafsjmoplihqpotqj.supabase.co",
  SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
    }
  }
);

// Then use adminClient for operations that need elevated permissions
```

### Option 3: Disable RLS Temporarily (Development Only)

You can temporarily disable RLS during development:

```sql
-- WARNING: Do not use in production!
ALTER TABLE blog_posts DISABLE ROW LEVEL SECURITY;
```

## Best Practice for Production

For production, the best approach is:

1. Create proper RLS policies
2. Implement authentication
3. Use appropriate auth roles for different operations
4. Never expose service role keys in client-side code

Need more help? Contact your Supabase administrator or refer to the [Supabase RLS documentation](https://supabase.com/docs/guides/auth/row-level-security). 