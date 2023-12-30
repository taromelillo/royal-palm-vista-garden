import { title_alt } from '@/config/fonts';

interface Title {
  title: string;
}

export const Title = ({ title }: Title) => {
  return <h1 className={`${title_alt.className} font-bold`}>{title}</h1>;
};
