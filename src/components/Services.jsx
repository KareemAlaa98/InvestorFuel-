import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


export default function Services() {
    return (
        <div className='container w-100'>
            <h1 className='font-weight-bold text-center mb-5'>Our Services</h1>
            <div className="cardsContainer">
                <MDBCard className='mb-5' style={{ maxWidth: '1100px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage src='https://images.pexels.com/photos/8866816/pexels-photo-8866816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle > <h4>Cold Callers</h4></MDBCardTitle>
                                <MDBCardText>
                                    <p>
                                        Our agents are highly skilled in cold-calling, having undergone training to develop expertise in time management, prospecting, and effective communication. These capabilities drive their ability to generate impressive results for you.
                                    </p>
                                </MDBCardText>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard className='mb-5' style={{ maxWidth: '1100px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage src='https://img.freepik.com/free-photo/woman-showing-man-finance-diagrams-table-laptop-papers_1268-17478.jpg?w=1380&t=st=1690394421~exp=1690395021~hmac=c4ea5d1d59134118ce805d1dd144955e27da08fa29527149c84a0a7603491d64' alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle> <h4>Lead Managers</h4> </MDBCardTitle>
                                <MDBCardText>
                                    <p>
                                        Your sales team has better things to do than chase down leads. Let our agents be an extension of your team. They will, #1 keep your calendars full of prospects and #2 help raise the show up rate for those appointments.                                    </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard className='mb-5' style={{ maxWidth: '1100px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage style={{ maxWidth: '100%' }} src='https://img.freepik.com/free-photo/man-giving-some-keys-woman_23-2148252120.jpg?w=1060&t=st=1690394606~exp=1690395206~hmac=dcca09467c497e825a0328b247491a3a5043d99a523015c93fb7c27f786dbf6f' alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle> <h4>ACQs</h4> </MDBCardTitle>
                                <MDBCardText>
                                    <p>
                                        Our acquisition managers seek out, run comps, negotiate prices, finalize, send contracts, and organize purchasing deals for your campaign
                                    </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard className='mb-5'>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage src='https://img.freepik.com/free-photo/schedule-time-management-planner-concept_53876-121130.jpg?w=996&t=st=1690395048~exp=1690395648~hmac=cedeb23d881f7c21616e2d46f0e1b2474cdd387be7a5617e9ac0a7bf79bba8c8' alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle> <h4>Appointment Setters </h4> </MDBCardTitle>
                                <MDBCardText>
                                    <p>
                                        If you prefer to manage sales directly, our agents can handle prospect outreach and appointment scheduling on your behalf, resulting in time and energy savings for you.
                                    </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>

        </div>
    )
}
