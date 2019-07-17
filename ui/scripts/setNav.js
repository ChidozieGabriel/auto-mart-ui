import Utils from './utils/Utils.js';

const htmlString = `
<div class="top">
  <div class="bar white card text-teal lh-50">
    <img
      class="h-50 hover-opacity image bar-item"
      src="./images/logo.png"
      alt="logo"
    />
    <div class="right hide-small">
      <div data-logged="false">
        <a href="signin" class="bar-item button">SIGN IN</a>
        <a href="signup" class="bar-item button">SIGN UP</a>
      </div>
      <div data-logged="true">
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
      </div>
    </div>
  </div>
</div>
`;

const node = Utils.htmlToElement(htmlString);
document.body.appendChild(node);