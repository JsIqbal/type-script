import { useEffect, useState } from "react";
import Nav from "./nav.component";
import { Table } from "./table.component";

export default function Dashboard() {
    return (
        <>
            <Nav />
            <Table />
        </>
    );
}
