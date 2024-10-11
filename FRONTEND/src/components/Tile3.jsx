const Tile3 = () => {
    return (
        <>
            <div className="col-xl-12">
                <div className="card proj-progress-card">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <h6>Published Project</h6>
                                <h5 className="m-b-30 f-w-700">
                                    532<span className="text-c-green m-l-10">+1.69%</span>
                                </h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-c-red"
                                        style={{ width: "25%" }}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <h6>Completed Task</h6>
                                <h5 className="m-b-30 f-w-700">
                                    4,569<span className="text-c-red m-l-10">-0.5%</span>
                                </h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-c-blue"
                                        style={{ width: "65%" }}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <h6>Successfull Task</h6>
                                <h5 className="m-b-30 f-w-700">
                                    89%<span className="text-c-green m-l-10">+0.99%</span>
                                </h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-c-green"
                                        style={{ width: "85%" }}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <h6>Ongoing Project</h6>
                                <h5 className="m-b-30 f-w-700">
                                    365<span className="text-c-green m-l-10">+0.35%</span>
                                </h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-c-yellow"
                                        style={{ width: "45%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tile3;
