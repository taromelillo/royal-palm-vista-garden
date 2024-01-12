'use client';
import { useDate } from '@/hooks/useDate';

import { IoTrashOutline } from 'react-icons/io5';

export const Dashboard = () => {
  const datesBooked = useDate();

  console.log(datesBooked);
  return (
    <div className="w-full h-[700px] bg-red-900">
      {datesBooked !== undefined ? (
        <table className="w-full mmin-h-[500px]">
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
                        <IoTrashOutline size={33} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        'nada'
      )}
    </div>
  );
};
