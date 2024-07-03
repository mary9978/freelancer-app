import React from 'react'
import useProject from '../features/project/useProject';
import Loading from '../ui/Loading';
import ProposalTable from '../features/project/ProposalTable';
import ProjectHeader from '../features/project/ProjectHeader';
import Empty from '../ui/Empty';
function Project() {
  const {isLoading , project} = useProject();
  if(isLoading) return <Loading />;
  if(!project.length) return <Empty title={'پروژه'}/>
  return (
    <div className='flex flex-col gap-y-4'>
      <ProjectHeader project={project}/>
      <ProposalTable project={project}/>
    </div>
  )
}

export default Project