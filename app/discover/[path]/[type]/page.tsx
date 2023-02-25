import { StarIcon, UserIcon } from '@heroicons/react/solid';
import { paths } from '@lib/navdata';
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

type Props = {
  params: {
    path: string;
    type: string;
  };
};

export default async function Page({ params }: Props) {
  //@ts-ignore
  const path = paths[params.path][params.type];

  const prisma = new PrismaClient();
  const data = await prisma.data.findFirst({
    where: {
      path: path,
    },
  });
  return (
    <ul className='flex flex-wrap gap-5 justify-center container mx-auto'>
      {data?.perfumes?.map((el, i) => {
        return (
          <li key={el.name} className='bg-slate-800 hover:ring-[1px] focus:ring-[1px] ring-white duration-200 outline-white relative group gap-5 w-[180px] md:w-[240px]'>
            <Image width={240} height={240} src={el.imageUrl} alt={el.name} />
            <div
              className='absolute opacity-0 flex justify-between flex-col
          transition duration-200 group-hover:opacity-100  bottom-0 
          left-0 w-full px-4 p-2 h-full bg-gradient-to-t from-black to-black/60'>
              <div className='w-8 h-8 absolute top-0 border-t-0 border-l-0 left-0 grid place-items-center border-[1px]'>
                <span className='text-lg font-semibold'>{el.place?.toString()}</span>
              </div>
              <div></div>
              <div>
                <p className='truncate'>{el.name}</p>
                <p>{el.brand}</p>
                {el.rating ? (
                  <div className='flex items-center'>
                    <span className='mr-2 flex items-center'>
                      <StarIcon className='mr-1 inline h-4 w-4' />
                      {el.rating}
                    </span>
                    <span className='flex items-center'>
                      ({el.amountOfVotes || '0'}
                      <UserIcon className='ml-1 inline h-4 w-4' />)
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
