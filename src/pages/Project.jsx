import React from 'react'
import useProject from '../features/project/useProject';
import Loading from '../ui/Loading';
import ProposalTable from '../features/project/ProposalTable';
import ProjectHeader from '../features/project/ProjectHeader';
function Project() {
  const {isLoading , project} = useProject();
  console.log(project)
  if(isLoading) return <Loading />
  return (
    <div className='flex flex-col gap-y-4'>
      <ProjectHeader project={project}/>
      <ProposalTable project={project}/>
    </div>
  )
}

export default Project