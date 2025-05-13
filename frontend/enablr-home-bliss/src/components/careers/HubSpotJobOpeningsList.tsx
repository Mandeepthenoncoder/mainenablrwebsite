import React, { useEffect, useState } from 'react';
import { fetchJobOpenings } from '@/services/hubspot';

interface JobOpening {
  id: string;
  properties: {
    title: string;
    location?: string;
    experience?: string;
    job_type?: string;
    department?: string;
    description?: string;
    requirements?: string;
    application_link?: string;
  };
}

const HubSpotJobOpeningsList: React.FC = () => {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchJobOpenings();
        setJobs(data);
      } catch (err: any) {
        setError('Failed to load job openings.');
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-enablr-navy">Current Openings</h2>
        {loading && <div className="text-center py-8">Loading...</div>}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-enablr-navy mb-2">{job.properties.title}</h3>
              <div className="text-sm text-gray-600 mb-1">{job.properties.location}</div>
              <div className="text-xs text-gray-500 mb-2">
                {job.properties.experience && <span>{job.properties.experience} | </span>}
                {job.properties.job_type && <span>{job.properties.job_type} | </span>}
                {job.properties.department && <span>{job.properties.department}</span>}
              </div>
              {job.properties.description && (
                <p className="text-gray-700 mb-4 line-clamp-3">{job.properties.description}</p>
              )}
              {job.properties.application_link && (
                <a
                  href={job.properties.application_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-enablr-navy text-white px-4 py-2 rounded hover:bg-enablr-orange transition-colors text-sm font-medium"
                >
                  Apply Now
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSpotJobOpeningsList; 