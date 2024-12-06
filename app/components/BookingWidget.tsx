import { FaUsers, FaCalendarAlt } from 'react-icons/fa';
export default function BookingWidget() {
  return (
    <div className="booking-widget">
      <div className="price-info">
        <div className="price-discount">₹1,49,086</div>
        <div className="price">₹1,00,086</div>
        <div className="price-text">/Night</div>
      </div>

      <div className="discount">
        <div className="inner">
          <p className="text">
          Special discounts available!!
          </p>
          <button className="discount-button">
            Unlock Price
          </button>
        </div>
      </div>

      <div className="booking-form">
        <div className="form-group">
          <button id="date-picker" className="date-picker-button">
          <FaCalendarAlt size={15} color="#888" />
            Check in - Check out
          </button>
        </div>

        <div className="form-group">
         
          <select id="guest-select" className="guest-select">
            <option value="">2 guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
          </select>
        </div>

        <button className="check-availability-button">Check Availability</button>
      </div>
    </div>
  )
}

