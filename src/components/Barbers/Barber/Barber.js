import React from 'react'
import Layout from "../../Layout";
import {connect} from "react-redux";
import i18n from "../../../i18n";

const Barber = ({match, barbers}) => {
    const {id} = match.params;

    return (
        <Layout>
            {
                barbers.barbers
                    .filter((barber, index) => (parseInt(barber.id) === parseInt(id)))
                    .map((barber, index) => (
                    <p key={index}>
                        {i18n.t(`${barber.name}`)}
                    </p>
                ))
            }
        </Layout>
    )
};
const mapStateToProps = (state) => ({
    barbers: state.barbers,
});

export default connect(mapStateToProps)(Barber);