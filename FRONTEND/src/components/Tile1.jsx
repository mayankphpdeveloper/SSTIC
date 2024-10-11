const Tile1 = () => {
    return (
        <>
            <div className="col-xl-4 col-md-12">
                <div className="card mat-stat-card">
                    <div className="card-block">
                        <div className="row align-items-center b-b-default">
                            <div className="col-sm-6 b-r-default p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-user text-c-purple f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>10K</h5>
                                        <p className="text-muted m-b-0">Visitors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-volume-down text-c-green f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>100%</h5>
                                        <p className="text-muted m-b-0">Volume</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-6 p-b-20 p-t-20 b-r-default">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-file-alt text-c-red f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>2000+</h5>
                                        <p className="text-muted m-b-0">Files</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="far fa-envelope-open text-c-blue f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>120</h5>
                                        <p className="text-muted m-b-0">Mails</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-12">
                <div className="card mat-stat-card">
                    <div className="card-block">
                        <div className="row align-items-center b-b-default">
                            <div className="col-sm-6 b-r-default p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-share-alt text-c-purple f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>1000</h5>
                                        <p className="text-muted m-b-0">Share</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-sitemap text-c-green f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>600</h5>
                                        <p className="text-muted m-b-0">Network</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-6 p-b-20 p-t-20 b-r-default">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-signal text-c-red f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>350</h5>
                                        <p className="text-muted m-b-0">Returns</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-b-20 p-t-20">
                                <div className="row align-items-center text-center">
                                    <div className="col-4 p-r-0">
                                        <i className="fas fa-wifi text-c-blue f-24" />
                                    </div>
                                    <div className="col-8 p-l-0">
                                        <h5>100%</h5>
                                        <p className="text-muted m-b-0">Connections</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-12">
                <div className="card mat-clr-stat-card text-white green ">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-3 text-center bg-c-green">
                                <i className="fas fa-star mat-icon f-24" />
                            </div>
                            <div className="col-9 cst-cont">
                                <h5>4000+</h5>
                                <p className="m-b-0">Ratings Received</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mat-clr-stat-card text-white blue">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-3 text-center bg-c-blue">
                                <i className="fas fa-trophy mat-icon f-24" />
                            </div>
                            <div className="col-9 cst-cont">
                                <h5>17</h5>
                                <p className="m-b-0">Achievements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tile1;
