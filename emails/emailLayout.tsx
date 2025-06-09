import globalCareLogo from "../public/images/Global-Care.jpg";
export const emailLayout = (content: string) => `
  <div style="
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    color: #333;
    padding: 20px;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    ">

      <!-- Header with Logo -->
      <div style="background: #0070f3; padding: 20px; text-align: center;">
        <img src=${globalCareLogo} alt="Global Care Logo" style="height: 40px;" />
      </div>

      <!-- Main Email Content -->
      <div style="padding: 24px;">
        ${content}
      </div>

      <!-- Footer with Social & Year -->
      <div style="
        padding: 16px 24px;
        background: #f1f1f1;
        text-align: center;
        font-size: 12px;
        color: #777;
      ">
        <p style="margin-bottom: 8px;">&copy; ${new Date().getFullYear()} Global Care. All rights reserved.</p>
        <div>
          <a href="https://facebook.com/yourbrand" style="margin: 0 8px;">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/yourbrand" style="margin: 0 8px;">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com/company/yourbrand" style="margin: 0 8px;">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733561.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </div>
`;
