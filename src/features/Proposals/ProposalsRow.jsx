import React from "react";
import Table from "../../ui/Table";
import convertText from "../../utils/convertText";
import convertToPersianNumber from "../../utils/convertPrice";
function ProposalsRow({proposal,index} ) {
    const {description,price,duration,status} = proposal;
    const statusStyle = [
      {
        label: "رد شده",
        className: "badge-danger",
      },
      {
        label: "در انتظار تایید",
        className: "badge--secondary",
      },
      {
        label: "تایید شده",
        className: "badge-success",
      },
    ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{convertText(description, 40)}</td>
      <td>{duration } روز </td>
      <td>{convertToPersianNumber(price)}</td>
      <td>
         <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalsRow;
