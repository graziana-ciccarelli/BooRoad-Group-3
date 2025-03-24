export default function TableViaggi (props) {
    const { viaggio } = props
    const { destinazione, img, data, durata, guide,partecipanti} = viaggio
    return (
        <>
            
               
                <tr>
                    <td><img src={img} alt="" /></td>
                    <td>{destinazione}</td>
                    <td>{data}</td>
                    <td>{durata}</td>
                    <td>{guide}</td>
                    <td>{partecipanti}</td>
                </tr>
            
        </>
    )
}
