const Progress = () => {
  // style = {width: "25%", 
  // ariaValuenow: "25",
  // ariaValuemin: "0", 
  // ariaValuemax: "100"}
  return ( 
    <div>
      <h2 className='mb-4'>Raised $441 of <span className='text-muted'>$1000</span></h2>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" >25%</div>
        </div>
    </div>
  );
};

export default Progress;
