'use client';

import useFirestore from '@/hooks/useFirestore';
import moment from 'moment';
import { IoTrashOutline } from 'react-icons/io5';

export const Dashboard = () => {
  const [datesBooked] = useFirestore({ database: 'bookings' });
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
            {datesBooked.map((dateBooked) => {
              return (
                <tr
                  key={dateBooked.id}
                  className="w-full h-[5rem] grid-cols-3 text-center items-center"
                >
                  <td>
                    <p>{dateBooked.name}</p>
                  </td>
                  <td>
                    {moment
                      .unix(dateBooked.day.seconds)
                      .toDate()
                      .toDateString()}
                  </td>
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
