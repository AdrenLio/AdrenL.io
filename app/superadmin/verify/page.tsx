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

const SortableTable:React.FC<SortableTableProps> = async () => {
  const isAdmin = await isAdminAuthenticated();
  if (!isAdmin) {
    return redirect("/superadmin/login");
  }

  const verifiedHosts: Host[] = await getVerifiedHosts();
  const notVerifiedHosts: Host[] = await getUnverifiedHosts();
  const hosts: Host[] = await getHosts();

  return (
   <>
    <VerifyClient verifiedHosts={verifiedHosts} notVerifiedHosts={notVerifiedHosts} hosts={hosts}/>
   </>
  );

}

export default SortableTable;
