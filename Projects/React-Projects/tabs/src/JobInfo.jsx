import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, duties, title } = jobs[currentItem];
  return (
    <article>
      <h3 className="text-4xl text-gray-700 mb-4 font-semibold">{title}</h3>
      <span className="text-md bg-gray-300 py-2 px-3 rounded-sm text-gray-800">
        {company}
      </span>
      <p className="mt-4 mb-4 text-gray-600">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
