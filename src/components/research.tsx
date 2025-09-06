import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, Link, BookOpen, FileText } from 'lucide-react';
import Image from 'next/image';

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
  abstract?: string;
  tags: string[];
  image?: string;
}

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  duration: string;
  collaborators?: string[];
  tags: string[];
  relatedPublications?: string[]; // IDs of related publications
  image?: string;
}

interface ResearchProps {
  publications: Publication[];
  projects: ResearchProject[];
}

export default function Research({ publications, projects }: ResearchProps) {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Research</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {project.image && (
                <div className="relative w-full h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.duration}</p>
                  <p className="my-2">{project.description}</p>
                  
                  {project.collaborators && project.collaborators.length > 0 && (
                    <div className="mt-2">
                      <span className="text-sm font-medium">Collaborators: </span>
                      <span className="text-sm">{project.collaborators.join(', ')}</span>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  
                  {project.relatedPublications && project.relatedPublications.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2 flex items-center gap-1">
                        <FileText className="w-4 h-4" /> Related Publications:
                      </p>
                      <ul className="list-disc pl-5">
                        {project.relatedPublications.map(pubId => {
                          const pub = publications.find(p => p.id === pubId);
                          return pub ? (
                            <li key={pubId} className="text-sm mb-1">
                              {pub.url ? (
                                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                  {pub.title}
                                </a>
                              ) : pub.title}
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-6" />
      
      <div>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-8 h-8" />
          Publications
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {publications.map((pub) => (
            <Card key={pub.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {pub.image && (
                <div className="relative w-full h-40">
                  <Image 
                    src={pub.image} 
                    alt={pub.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {pub.title}
                      </a>
                    ) : pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  <p className="text-sm font-medium">{pub.venue}, {pub.year}</p>
                  
                  {pub.abstract && (
                    <p className="mt-2 text-sm line-clamp-3">{pub.abstract}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  
                  {pub.url && (
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group mt-4 flex items-center justify-between rounded-xl p-2 transition-colors hover:bg-[#F5F5F7] dark:hover:bg-neutral-800"
                    >
                      <span className="font-light">View Publication</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
