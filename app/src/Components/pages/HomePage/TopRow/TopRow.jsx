import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {IndexLink} from 'react-router-dom';
import './TopRow.scss';

function TopRow() {
  return (
    <div className="top-row">
      <p>
        ט׳ריפטוש נולדה כדי לעודד שיתוף ומכירה מקומית של בגדים. אנחנו לא חנות רשמית - הכל פה מתנהל
        בין המוכרים והקונים. אתם מוזמנים לדבר ביניכם, לקבוע איסוף או משלוח ואת צורת התשלום. בנוסף,
        כל אחת ואחד מוזמנים להוסיף פריטים משלכם אנחנו פה בשבילכן. אנחנו ללא מטרת רווח ולא לוקחים
        עמלה מהמכירות. נשמח לשיתופים, להוקרת תודה נצחית (זה טוב לאגו), ולחצאיות מהממות.
        <br /><br />
        <FontAwesomeIcon icon={faInstagram} />
        <a href="https://www.instagram.com/thriftush/" className="inst-link" target="_blank" rel="noreferrer"> תעקבו אחרינו באינסטגרם</a>
        , כיף שם!
      </p>
    </div>
  );
}

export default TopRow;
