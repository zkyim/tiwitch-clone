import { getSearch } from '@/lib/search-service';
import React from 'react'
import { ResultCard, ResultCardSkeleton } from './ResultCard';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultsProps {
  term?: string;
}

export const Results = async ({term}: ResultsProps) => {
  console.log(term);
    const data = await getSearch(term);
  return (
    <div>
      <h2></h2>
      {data.length === 0 && (
        <div className='text-muted-foreground text-sm'>No results found. Try searching for something else.</div>
      )}
      <div className='flex flex-col gap-y-4'>
        {data.map(result => (
            <ResultCard data={result} key={result.id}/>
        ))}
      </div>
    </div>
  )
}

export const ResultsSkeleton = () => {
    return (
        <div>
            <Skeleton className='h-8 w-[290px] mb-4'/>
            <div className='flex flex-col gap-y-4'>
                {[...Array(4)].map((_, i) => (
                    <ResultCardSkeleton key={i}/> 
                ))}
            </div>
        </div>
    )
}
