const Tile2 = () => {
    return (
        <>
            <div className="col-xl-6 col-md-12">
                <div className="card table-card">
                    <div className="card-header">
                        <h5>Member’s performance</h5>
                        <div className="card-header-right">
                            <ul className="list-unstyled card-option">
                                <li>
                                    <i className="fa fa fa-wrench open-card-option" />
                                </li>
                                <li>
                                    <i className="fa fa-window-maximize full-card" />
                                </li>
                                <li>
                                    <i className="fa fa-minus minimize-card" />
                                </li>
                                <li>
                                    <i className="fa fa-refresh reload-card" />
                                </li>
                                <li>
                                    <i className="fa fa-trash close-card" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-block">
                        <div className="table-responsive">
                            <table className="table table-hover m-b-0 without-header">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img
                                                    src="assets/images/avatar-4.jpg"
                                                    alt="user image"
                                                    className="img-radius img-40 align-top m-r-15"
                                                />
                                                <div className="d-inline-block">
                                                    <h6>Shirley Hoe</h6>
                                                    <p className="text-muted m-b-0">
                                                        Sales executive , NY
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <h6 className="f-w-700">
                                                $78.001
                                                <i className="fas fa-level-down-alt text-c-red m-l-10" />
                                            </h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img
                                                    src="assets/images/avatar-2.jpg"
                                                    alt="user image"
                                                    className="img-radius img-40 align-top m-r-15"
                                                />
                                                <div className="d-inline-block">
                                                    <h6>James Alexander</h6>
                                                    <p className="text-muted m-b-0">
                                                        Sales executive , EL
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <h6 className="f-w-700">
                                                $89.051
                                                <i className="fas fa-level-up-alt text-c-green m-l-10" />
                                            </h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img
                                                    src="assets/images/avatar-4.jpg"
                                                    alt="user image"
                                                    className="img-radius img-40 align-top m-r-15"
                                                />
                                                <div className="d-inline-block">
                                                    <h6>Shirley Hoe</h6>
                                                    <p className="text-muted m-b-0">
                                                        Sales executive , NY
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <h6 className="f-w-700">
                                                $89.051
                                                <i className="fas fa-level-up-alt text-c-green m-l-10" />
                                            </h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img
                                                    src="assets/images/avatar-2.jpg"
                                                    alt="user image"
                                                    className="img-radius img-40 align-top m-r-15"
                                                />
                                                <div className="d-inline-block">
                                                    <h6>Nick Xander</h6>
                                                    <p className="text-muted m-b-0">
                                                        Sales executive , EL
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <h6 className="f-w-700">
                                                $89.051
                                                <i className="fas fa-level-up-alt text-c-green m-l-10" />
                                            </h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-md-12">
                <div className="row">
                    {/* sale card start */}
                    <div className="col-md-6">
                        <div className="card text-center order-visitor-card">
                            <div className="card-block">
                                <h6 className="m-b-0">Total Subscription</h6>
                                <h4 className="m-t-15 m-b-15">
                                    <i className="fa fa-arrow-down m-r-15 text-c-red" />
                                    7652
                                </h4>
                                <p className="m-b-0">48% From Last 24 Hours</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center order-visitor-card">
                            <div className="card-block">
                                <h6 className="m-b-0">Order Status</h6>
                                <h4 className="m-t-15 m-b-15">
                                    <i className="fa fa-arrow-up m-r-15 text-c-green" />
                                    6325
                                </h4>
                                <p className="m-b-0">36% From Last 6 Months</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-c-red total-card">
                            <div className="card-block">
                                <div className="text-left">
                                    <h4>489</h4>
                                    <p className="m-0">Total Comment</p>
                                </div>
                                <span className="label bg-c-red value-badges">15%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-c-green total-card">
                            <div className="card-block">
                                <div className="text-left">
                                    <h4>$5782</h4>
                                    <p className="m-0">Income Status</p>
                                </div>
                                <span className="label bg-c-green value-badges">20%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center order-visitor-card">
                            <div className="card-block">
                                <h6 className="m-b-0">Unique Visitors</h6>
                                <h4 className="m-t-15 m-b-15">
                                    <i className="fa fa-arrow-down m-r-15 text-c-red" />
                                    652
                                </h4>
                                <p className="m-b-0">36% From Last 6 Months</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center order-visitor-card">
                            <div className="card-block">
                                <h6 className="m-b-0">Monthly Earnings</h6>
                                <h4 className="m-t-15 m-b-15">
                                    <i className="fa fa-arrow-up m-r-15 text-c-green" />
                                    5963
                                </h4>
                                <p className="m-b-0">36% From Last 6 Months</p>
                            </div>
                        </div>
                    </div>
                    {/* sale card end */}
                </div>
            </div>
        </>
    );
};

export default Tile2;
