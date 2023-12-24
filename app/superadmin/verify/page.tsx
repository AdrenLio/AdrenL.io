import { redirect, useRouter } from "next/navigation";
import isAdminAuthenticated from "@/app/actions/isAdminAuthenticated";
import { getHosts, getUnverifiedHosts, getVerifiedHosts } from "@/app/actions/getHosts";
import VerifyClient from "./verifyClient";
import { Host } from "@prisma/client";

interface SortableTableProps {
  verifiedHosts: Host[];
  notVerifiedHosts: Host[];
  hosts: Host[];
}


export async function SortableTable() {
  const isAdmin = await isAdminAuthenticated();
  if (!isAdmin) {
    return redirect("/superadmin/login");
  }

  const verifiedHosts = getVerifiedHosts();
  const notVerifiedHosts = getUnverifiedHosts();
  const hosts = getHosts();

  return (
   <>
    <VerifyClient verifiedHosts={verifiedHosts} notVerifiedHosts={notVerifiedHosts} hosts={hosts}/>
   </>
  );
}

export default SortableTable;
