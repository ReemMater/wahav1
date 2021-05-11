import React from 'react';
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import 'velocity-react';




const Sidemenu = () => {
  var svg = $('.curtain');
  var path = svg.find('.bir1'); // define svg path
  var open = true;

  function handlerIn() {
    // mouse enter
    if (open) {
      $(".bir1").velocity({ stroke: '#21F', opacity: 0 }, { duration: 350 });
      $(".bir2").velocity({ stroke: '#21F', opacity: 0 }, { duration: 350 });
      $(".bir11").velocity({ stroke: '#21F', opacity: 1 }, { duration: 350 });
      $(".bir21").velocity({ stroke: '#21F', opacity: 1 }, { duration: 350 });
      $(".x1").velocity({ stroke: '#010032', opacity: 0 });
      $(".x2").velocity({ stroke: '#010032', opacity: 0 })
      $(".iki").velocity({ stroke: '#21F', opacity: 1 });
      $(".uc").velocity({ stroke: '#010032' })
    }
    else {
      $(".bir1").velocity({ stroke: '#21F', opacity: 0 });
      $(".bir2").velocity({ stroke: '#21F', opacity: 0 });
      $(".bir11").velocity({ stroke: '#21F', opacity: 0 });
      $(".bir21").velocity({ stroke: '#21F', opacity: 0 });
      $(".x1").velocity({ stroke: '#005', opacity: 1 });
      $(".x2").velocity({ stroke: '#005', opacity: 1 })
      $(".iki").velocity({ stroke: '#21F', opacity: 0 });
      $(".uc").velocity({ stroke: '#010032' })

    }


  }
  function handlerOut() {
    // mouse exit
    // mouse enter
    if (open) {
      $(".bir1").velocity({ stroke: '#010032', opacity: 1 });
      $(".bir2").velocity({ stroke: '#010032', opacity: 1 });
      $(".bir11").velocity({ stroke: '#010032', opacity: 0 });
      $(".bir21").velocity({ stroke: '#010032', opacity: 0 });
      $(".x1").velocity({ stroke: '#010032', opacity: 0 });
      $(".x2").velocity({ stroke: '#010032', opacity: 0 })
      $(".iki").velocity({ stroke: '#010032', opacity: 1 });
      $(".uc").velocity({ stroke: '#010032' })
    }
    else {
      $(".bir1").velocity({ stroke: '#21F', opacity: 0 });
      $(".bir2").velocity({ stroke: '#21F', opacity: 0 });
      $(".bir11").velocity({ stroke: '#21F', opacity: 0 });
      $(".bir21").velocity({ stroke: '#21F', opacity: 0 });
      $(".x1").velocity({ stroke: '#fff', opacity: 1 });
      $(".x2").velocity({ stroke: '#fff', opacity: 1 })
      $(".iki").velocity({ stroke: '#fff', opacity: 0 });
      $(".uc").velocity({ stroke: '#fff' })
    }

  };
  function handlerClick() { // mouse click
    if (open) {
      $(".bir1").velocity({ stroke: '#010032', opacity: 0 });
      $(".bir11").velocity({ stroke: '#010032', opacity: 0 });
      $(".iki").velocity({ stroke: '#010032', opacity: 0 });
      $(".bir2").velocity({ stroke: '#010032', opacity: 0 });
      $(".bir21").velocity({ stroke: '#010032', opacity: 0 });
      $(".x1").velocity({ stroke: '#010032', opacity: 1 });
      $(".x2").velocity({ stroke: '#010032', opacity: 1 });
      $(".uc").velocity({ stroke: '#999' });
      document.getElementById("mySidenav").style.width = "250px";
      open = false;
    }
    else {
      $(".bir1").velocity({ stroke: '#010032', opacity: 1 });
      $(".bir11").velocity({ stroke: '#010032', opacity: 0 });
      $(".iki").velocity({ stroke: '#010032', opacity: 1 });
      $(".bir2").velocity({ stroke: '#010032', opacity: 1 });
      $(".bir21").velocity({ stroke: '#010032', opacity: 0 });
      $(".x1").velocity({ stroke: '#010032', opacity: 0 });
      $(".x2").velocity({ stroke: '#010032', opacity: 0 });
      $(".uc").velocity({ stroke: '#999' }, { duration: 350 });
      document.getElementById("mySidenav").style.width = "0";
      open = true;
    }
  };

  function handleMousePos(event) {
    var mouseClickWidth = event.clientX;
    if (mouseClickWidth >= 270) {
      document.getElementById("mySidenav").style.width = "0";
      open = true;
      handlerOut();
    }
  }

  document.addEventListener("click", handleMousePos);

  return (
    <div>
      <div className="togggleouter">

        <svg xmlns="http://www.w3.org/2000/svg" className="svg1 menutoggle curtain" onMouseEnter={handlerIn} onMouseLeave={handlerOut} onClick={handlerClick}>
          <g fill="none" stroke="#010032">
            <line className="bir11" x1="10" y1="15" x2="40" y2="15" opacity="0" />
            <line className="bir1" x1="15" y1="15" x2="35" y2="15" strokeWidth="2" />
            <line className="iki" x1="10" y1="25" x2="40" y2="25" strokeWidth="2" />
            <line className="bir2" x1="15" y1="35" x2="35" y2="35" strokeWidth="2" />
            <line className="bir21" x1="10" y1="35" x2="40" y2="35" opacity="0" />
            <line className="x1" x1="15" y1="35" x2="35" y2="15" opacity="0" />
            <line className="x2" x1="15" y1="15" x2="35" y2="35" opacity="0" />

          </g>
        </svg>

        <div id="mySidenav" className="sidenav">
          <Nav.Link href="/" >الرئيسية</Nav.Link>
          <Nav.Link href="/ar/about">عن الشركة</Nav.Link>
          <Nav.Link href="/ar/gallery" >صور</Nav.Link>
          <Nav.Link href="/ar/alwahaNews" >اخبار الواحة</Nav.Link>
          <Nav.Link href="/ar/payment">الدفع الالكتروني</Nav.Link>
          <Nav.Link href="/ar/contact">تواصل معنا</Nav.Link>
          <Nav.Link href="/en">EN</Nav.Link>
        </div>
      </div>

    </div>
  );
};

export default Sidemenu;
