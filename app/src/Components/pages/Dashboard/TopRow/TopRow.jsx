import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './TopRow.sass';

function TopRow() {
  return (
    <div className="top-row">
      <p>
        ט׳ריפטוש נולדה כדי לעודד שיתוף ומכירה מקומית של בגדים. אנחנו לא חנות רשמית - הכל פה מתנהל
        בין המוכרים והקונים. אתם מוזמנים לדבר ביניכם, לקבוע איסוף או משלוח ואת צורת התשלום. בנוסף,
        כל אחת ואחד מוזמנים להוסיף פריטים משלכם אנחנו פה בשבילכן. אנחנו ללא מטרת רווח ולא לוקחים
        עמלה מהמכירות. נשמח לשיתופים, להוקרת תודה נצחית (זה טוב לאגו), ולחצאיות מהממות.
        <br /><br />
        <FontAwesomeIcon icon={faInstagram} /> תעקבו אחרינו באינסטגרם, כיף שם!
      </p>
    </div>
  );
}

export default TopRow;
