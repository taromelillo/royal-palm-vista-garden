'use client';
import { useDate } from '@/hooks/useDate';
import { Skeleton } from '@nextui-org/skeleton';
import './Dashboard.css';

import { IoTrashOutline } from 'react-icons/io5';

export const Dashboard = () => {
  const datesBooked = useDate();

  return (
    <div className="w-full h-[700px] p-[1rem]">
      {datesBooked !== undefined ? (
        <table className="w-full min-h-[500px] fade-in">
          <thead className="w-full h-[5rem] grid-cols-3 border-b border-accent">
            <tr>
              <th>Name</th>
              <th>Day</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="w-full h-full">
            {datesBooked !== null &&
              datesBooked.map((data: any) => {
                return (
                  <tr
                    key={data.id}
                    className="w-full h-[5rem] grid-cols-3 text-center items-center"
                  >
                    <td>
                      <p>{data.name}</p>
                    </td>
                    <td>{data.day}</td>
                    <td>
                      <button>
                        <IoTrashOutline size={23} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <Skeleton className="w-full min-h-[500px] rounded-lg bg-default-300 gradient" />
      )}
    </div>
  );
};
