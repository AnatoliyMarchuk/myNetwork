import React, { Component } from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import withRouter from '../../hoc/withRouter';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {
	componentDidMount() {
		console.log('ProfileContainer', this.props);
		// debugger;
		let profileId = this.props.router.params.userId;
		if (!profileId) {
			profileId = this.props.userId;
		}

		this.props.getUserProfile(profileId);
		this.props.getUserStatus(profileId);
	}

	render() {
		// const params = useParams()
		return (
			<>
				<div className={s.Profile}>
					<Profile
						{...this.props}
						profile={this.props.profile}
						status={this.props.status}
						updateUserStatus={this.props.updateUserStatus}
					/>
				</div>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		userId: state.auth.userId,
		isAuth: state.profilePage.isAuth,
	};
};

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
