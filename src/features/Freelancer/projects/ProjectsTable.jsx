import React from 'react'
import useProject from '../../../hooks/useProjects'
import Loading from '../../../ui/Loading';
import ProjectsRow from './ProjectsRow';
import Table from '../../../ui/Table';
function ProjectsTable() {
  const {projects,isLoading} = useProject();
  if (isLoading) return <Loading/>
  if (!projects) return <h2>پروژه ای یافت نشد</h2>;
  return (
      <Table>
        <Table.Header>
          <th scope="col" className="p-4">
            #
          </th>
          <th scope="col" className="p-4">
            عنوان پروژه
          </th>
          <th scope="col" className="p-4">
            بودجه
          </th>
          <th scope="col" className="p-4">
            ددلاین
          </th>
          <th scope="col" className="p-4">
            وضعیت
          </th>
          <th scope="col" className="p-4">
            عملیات
          </th>
        </Table.Header>
        <Table.Body>
          {projects.map((pr, index) => {
            return <ProjectsRow key={index} index={index} projects={pr} />;
          })}
        </Table.Body>
      </Table>

  );
}

export default ProjectsTable