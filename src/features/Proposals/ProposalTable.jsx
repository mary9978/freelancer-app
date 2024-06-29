import React from "react";
import useProposals from "./useProposals";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalsRow";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  if (!proposals) return <h2>پروپوزالی یافت نشد </h2>;
  return (
    <div>
      <Table>
        <Table.Header>
          <th scope="col" className="p-4">
            #
          </th>
          <th scope="col" className="p-4">
            توضیحات
          </th>
          <th scope="col" className="p-4">
            زمان تحویل
          </th>
          <th scope="col" className="p-4">
            هزینه
          </th>
          <th scope="col" className="p-4">
            وضعیت
          </th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow index={index} proposal={proposal} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTable;
