import ResidentInfo from './ResidentInfo'
const ResidentContainer = ({residents}) => {
    
    const residentsList = residents.map((resident, index) => {
      return <ResidentInfo url={resident} key={index}/>
    })

    return (
        <div className='ResidentContainer'>
            {residentsList}
        </div>
    )
}
export default ResidentContainer