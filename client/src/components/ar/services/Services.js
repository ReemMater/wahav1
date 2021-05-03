import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../../img/services.jpg';
import img2 from '../../../img/img2.PNG'

const Services = () => {
    return (
      <div className="services" dir="rtl">
  <Row>
     
      <Col lg={8} xm={12}>
      <div className="services-divs">
          <h3 className="text-center">مميزات الواحة</h3>
          <ul className="text-right">
            <li>– أمن وحراسة 24 ساعة.</li>
            <li>– لاند سكيب، وبحيرات صناعية.</li>
            <li>– نادي رياضي واجتماعي، يحتوى على ملاعب لكرة القدم والتنس وحمام سباحة وقاعة اجتماعات.</li>
            <li>– مول إداري وتجاري، على مستوى راقٍ.</li>
            <li>– مسجد على الطراز القديم ملحق به مكتبة.</li>
            <li>– حضانة لتوفير الرعاية الكاملة للأطفال الصغار.</li>
            <li>– مركز طبي حديث به وحدة صحية للطوارئ ومستشفى لعمليات اليوم الواحد ومجموعة من العيادات الأساسية للتخصصات المختلفة.</li>
          </ul>
          </div>
      </Col>
      <Col lg={4} xm={12}>
      <img src={img1} alt="" width="100%" height="48%" className="my-2"/>
      <img src={img2} alt="" width="100%" height="48%" className="my-2"/>
      </Col>
  </Row>
      </div>
    );
  };
  
  export default Services;
  
