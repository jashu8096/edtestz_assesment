import './Bookings.css'

function Bookings(){

    return(
        <>
              <h1 className="booking-text flex-inputs">Book A Appointment</h1>
              
              <div className="flex-inputs">


              
                    <div className='item'>
                        <label for="name" className="label-teaxt">Name:</label>
                        <input type="text" className="input" id="name" name="name" required/>
                    </div>
                    <div className='item'>
                        <label for="appointment-date" className="label-teaxt">Appointment Date:</label>
                        <input type="date" className="input" id="appointment-date" name="appointment-date" required/>
                    </div>
                    <div className='item'>
                        <label for="phone-number" className="label-teaxt">Phone Number:</label>
                        <input type="tel" className="input" id="phone-number" name="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    </div>
                    <div className='item'>
                        <label for="address" className="label-teaxt">Address:</label>
                        <input type="text" className="input" id="address" name="address" required/>
                    </div>
                    <div className='item'>
                        <button type="submit" className='btn'>Book Appointment</button>
                    </div>
                

               



              </div>



        
          
        </>
    )
}

export default Bookings
