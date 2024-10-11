const Page_header = () => {
  return (
    <>
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="page-header-title">
                <h5 className="m-b-10">Dashboard</h5>
                <p className="m-b-0">Welcome to Material Able</p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">
                    
                    <i className="fa fa-home" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Dashboard</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_header;
