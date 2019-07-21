import Utils from './utils/Utils.js';

const htmlString = `
<div class="top">
  <div class="bar white card text-teal lh-50">
    <a href="carlist" class="bar-item button">
      <img
        class="h-50 hover-opacity image bar-item"
        src="./images/logo.png"
        alt="logo"
      />
    </a>
   
    <div class="right hide-small">
      <span data-logged="false">
        <a href="signin" class="bar-item button">SIGN IN</a>
        <a href="signup" class="bar-item button">SIGN UP</a>
      </span>
      <span data-logged="true">
        <a href="" class="bar-item button hide"
          >ORDERS <span data-orders="number" class="badge teal">0</span></a
        >
        <a href="" class="bar-item button"
          >MY CARS <span data-cars="number" class="badge teal">0</span></a
        >
        <!-- <a data-username="text" href="" class="bar-item button"
          >USERNAME</a -->
        <!-- > -->
        <a href="" data-link="logout" class="bar-item button"
          >LOG OUT</a
        >    
      </span>
      <a href="car" data-link="postcar" class="bar-item button teal"
          >POST CAR</a
        >
    </div>
  </div>
</div>
`;

const node = Utils.htmlToElement(htmlString);
document.body.appendChild(node);
