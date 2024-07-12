// eslint-disable-next-line react/prop-types
const Subject = ({ title }) => {
  return (
    <div className="conspect">
      <div>
        <p>{title}</p>
      </div>
      {/* <div className="content">
        <div>
          <p>Author: {author}</p>
        </div>
        <div>
          <p>{link}</p>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Subject;
