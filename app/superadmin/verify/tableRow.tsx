import { PencilIcon } from "@heroicons/react/24/solid";
import { Avatar, Chip, IconButton, Tooltip, Typography } from "@material-tailwind/react";

interface TableRowProps {
    img: string;   
    name: string;
    email: string;
    job: string;
    org: string;
    verified: boolean;
    date: string;
    isLast: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ img, name, email, job, org, verified, date, isLast  }) => {
   
        const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                    return(
        <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {job}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={verified ? "Verified" : "Not-Verified"}
                            color={verified ? "green" : "red"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
    )

}

export default TableRow