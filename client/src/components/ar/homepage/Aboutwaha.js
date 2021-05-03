import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Aboutwaha = () => {
    return (
        <div dir="rtl">
            <div className="about-waha-home">


                <div className="text-center">

                    <h1 className="pt-3  color-blue">عن واحة الريحان</h1>

                    <ul className="aboutwhysection">
                        <li>واحة الريحان.. واحة سكنية متكاملة تجمع بين جمال الطبيعة والتصميم العصري داخل حدائق أكتوبر.</li>
                        <li>تم تنفيذ الواحة على 30 فدانا، بمساحات خضراء تمتد لـ 82% من إجمالي الكمبوند تتخللها بحيرات صناعية، ونسبة أقل من 18% للمباني.</li>
                        <li> تقع واحة الريحان على بُعد دقائق قليلة من مدخل مدينة السادس من أكتوبر وميدان الرماية والمتحف المصري الكبير والطريق الدائري لتسهيل الوصول إليها من أي مكان.</li>
                    </ul>
                </div>


                <div className="text-center mt-5 ">

                    <h1 className="pt-3 color-blue">لماذا واحة الريحان وجهتك المثالية</h1>

                    <ul className="aboutwhysection">
                        <li>يسهل الوصول إليها من أي مكان في القاهرة و التصميم العصري يمنحك شعورا بالاستقلالية</li>
                        <li>82% من المساحة مناطق خضراء وبحيرات صناعية و توافر الأمن والحماية على مدار 24 ساعة</li>
                        <li>تتوافر بها خيارات متعددة للترفيه والتسوق و مساحات مختلفة وخيارات مريحة للسداد</li>
                    </ul>

                </div>
            </div>

        </div>


    );
};

export default Aboutwaha;
