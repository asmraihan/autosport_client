
const Stats = () => {
    return (
     <div className="lg:w-4/6 mx-auto">
           <div className="lg:stats space-y-4 lg:space-y-0 shadow p-10 w-full">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title">Total Sales</div>
                <div className="stat-value text-primary">5.6K</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">20K</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-32 rounded-full">
                            <img src="https://i.ibb.co/b2jhr4G/logo.png" />
                        </div>
                    </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Pending done</div>
                <div className="stat-desc text-secondary">31 Order remaining</div>
            </div>

        </div>
     </div>
    );
};

export default Stats;