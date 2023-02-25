import { paths } from '@lib/navdata';
import Dropdown from '@components/Dropdown';

export default async function DiscoverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='flex mx-auto w-3/4 max-w-[500px] justify-between'>
        {Object.entries(paths).map(([key, values]) => {
          return (
            <div className='px-4 py-2' key={key}>
              <Dropdown name={key} values={values} />
            </div>
          );
        })}
      </div>
      <div className='flex justify-center h-full'>{children}</div>
    </div>
  );
}
