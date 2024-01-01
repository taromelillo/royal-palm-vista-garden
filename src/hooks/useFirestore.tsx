"use client";
import { useEffect, useState } from "react";

interface FirestoreProps {
  database: string;
}

const useFirestore = ({ database }: FirestoreProps) => {
  const [data, setData] = useState();

  useEffect(() => {}, []);

  return [data];
};

export default useFirestore;
