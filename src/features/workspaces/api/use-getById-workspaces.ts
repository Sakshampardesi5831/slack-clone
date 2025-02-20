import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";


interface UserWorkSpaceByIdProps {
    id:Id<"workspaces">
}


export const userGetWorkSpacesById = ({id}:UserWorkSpaceByIdProps) => {
  const data = useQuery(api.workspaces.getById,{id});
  const isLoading = data === undefined;
  return { data, isLoading };
};
