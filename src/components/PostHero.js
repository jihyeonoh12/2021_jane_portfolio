import React from 'react';

class PostHero extends React.Component {
    render() {
    return(
        <div className="max-w-[1200px] w-full mx-auto my-[12px] margin-tb container">
            <div className="mt-10">
                <img src={this.props.image} className="w-full h-auto mb-[40px] mt-10 "/>
                <div className="text-left block md:flex gap-2.5">
                    <div className="md:w-1/2 w-full box-border mr-2.5">
                    <h1>{this.props.title}</h1>
                    </div>
                    <div className="md:w-1/2 w-full box-border space-between block md:flex gap-2.5">
                        <div className="w-full md:w-[30%]">
                        <h3>{this.props.from}</h3>
                        <p>{this.props.company}</p>
                        </div>
                        <div className="w-full md:w-[20%]">
                        <h3>Date</h3>
                        <p>{this.props.date}</p>
                        </div>
                        <div className="md:w-1/2 w-full box-border">
                        <h3>Involvement</h3>
                        <p>{this.props.role1}</p>
                        <p className="empty">{this.props.role2}</p>
                        <p className="empty">{this.props.role3}</p>
                        <p className="empty">{this.props.role4}</p>
                        <p className="empty">{this.props.role5}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default PostHero