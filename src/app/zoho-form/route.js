export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us - FI Digital</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #1D4ED8;
      --primary-hover: #1E40AF;
      --bg: #ffffff;
      --text: #1f2937;
      --text-muted: #6b7280;
      --label: #374151;
      --input-bg: #ffffff;
      --input-border: #d1d5db;
      --input-focus: #1D4ED8;
      --error: #ef4444;
      --radius: 10px;
      --shadow-focus: 0 0 0 4px rgba(29,78,216,0.12);
      --transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
    }

    [data-theme="dark"] {
      --bg: transparent;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --label: #d1d5db;
      --input-bg: rgba(255,255,255,0.06);
      --input-border: rgba(255,255,255,0.14);
      --input-focus: #3b82f6;
      --shadow-focus: 0 0 0 4px rgba(59,130,246,0.18);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { overflow-x: hidden; }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      /* fluid padding: 12px on small, up to 28px on large */
      padding: clamp(12px, 3vw, 28px);
      line-height: 1.5;
      overflow-x: hidden;
    }

    #crmWebToEntityForm { width: 100%; max-width: 860px; margin: 0 auto; }

    /* ── Grid layout ─────────────────────────────────────── */
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(0.75rem, 2vw, 1.25rem);
    }
    .full-width { grid-column: span 2; }

    /* Tablet: keep 2-col but tighten gap */
    @media (max-width: 768px) {
      .form-grid { gap: 0.9rem; }
    }

    /* Mobile: single column */
    @media (max-width: 540px) {
      .form-grid { grid-template-columns: 1fr; }
      .full-width { grid-column: span 1; }
    }

    /* ── Field rows ──────────────────────────────────────── */
    .zcwf_row { display: flex; flex-direction: column; gap: 5px; }

    .zcwf_col_lab label {
      font-size: clamp(0.75rem, 1.5vw, 0.85rem);
      font-weight: 600;
      color: var(--label);
      letter-spacing: 0.015em;
    }
    .required { color: var(--error); margin-left: 2px; }

    /* ── Inputs / textareas ──────────────────────────────── */
    .zcwf_col_fld input[type="text"],
    .zcwf_col_fld input[type="email"],
    .zcwf_col_fld textarea,
    .zcwf_col_fld select {
      width: 100%;
      padding: clamp(0.65rem, 1.8vw, 0.85rem) clamp(0.8rem, 2vw, 1.1rem);
      background: var(--input-bg);
      border: 1.5px solid var(--input-border);
      border-radius: var(--radius);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', inherit;
      font-size: clamp(0.9rem, 2vw, 1rem);
      transition: var(--transition);
      outline: none;
      -webkit-appearance: none;
      appearance: none;
    }
    .zcwf_col_fld input::placeholder,
    .zcwf_col_fld textarea::placeholder { 
      color: var(--text-muted); 
      font-size: 0.9em; 
      font-family: 'Plus Jakarta Sans', sans-serif;
      opacity: 0.7;
    }
    .zcwf_col_fld input:focus,
    .zcwf_col_fld textarea:focus,
    .zcwf_col_fld select:focus {
      border-color: var(--input-focus);
      box-shadow: var(--shadow-focus);
      background: var(--bg);
    }
    .zcwf_col_fld textarea { min-height: 120px; resize: vertical; }

    /* ── Captcha ─────────────────────────────────────────── */
    .captcha-wrapper { display: flex; flex-direction: column; gap: 0.6rem; }
    .captcha-img-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    #imgid3209734000015098004 {
      border-radius: 8px;
      height: 46px;
      width: auto;
      max-width: 100%;
      border: 1.5px solid var(--input-border);
      display: block;
      background: #fff;
      flex-shrink: 0;
    }
    [data-theme="dark"] #imgid3209734000015098004 { filter: invert(0.85) brightness(1.1); }
    .reload-link {
      color: var(--input-focus);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;
    }
    .reload-link:hover { text-decoration: underline; }

    /* ── Hidden fields ───────────────────────────────────── */
    .wfrm_fld_dpNn { display: none !important; }

    /* ── Buttons ─────────────────────────────────────────── */
    .button-row {
      margin-top: clamp(1.25rem, 3vw, 1.75rem);
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .zcwf_button {
      padding: clamp(0.55rem, 1.5vw, 0.7rem) clamp(1.2rem, 4vw, 2rem);
      border-radius: 100px;
      font-family: inherit;
      font-weight: 700;
      font-size: clamp(0.85rem, 2vw, 0.95rem);
      cursor: pointer;
      transition: var(--transition);
      border: none;
      white-space: nowrap;
    }
    .formsubmit {
      background: linear-gradient(135deg, #0279FF 0%, #00A3F3 100%);
      color: #fff;
      box-shadow: 0 4px 14px rgba(2,121,255,0.35);
      flex: 1 1 auto;
    }
    .formsubmit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(2,121,255,0.4);
    }
    .formsubmit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
    .btn-reset {
      background: transparent;
      border: 1.5px solid var(--input-border);
      color: var(--text);
    }
    .btn-reset:hover { background: rgba(128,128,128,0.07); }

    /* Full-width buttons on very small screens */
    @media (max-width: 380px) {
      .button-row { flex-direction: column; }
      .zcwf_button { width: 100%; text-align: center; flex: none; }
    }
  </style>
</head>
<body>
  <div id="crmWebToEntityForm">
    <form
      id="webform3209734000015098004"
      action="https://crm.zoho.com/crm/WebToLeadForm"
      name="WebToLeads3209734000015098004"
      method="POST"
      onsubmit="javascript:document.charset='UTF-8'; return checkMandatory3209734000015098004()"
      accept-charset="UTF-8">

      <!-- Do not remove this code. -->
      <input type="text" style="display:none;" name="xnQsjsdp" value="36759fdb49005e835b1ab8dfaa6b5260efd73870a91b3d99aeed88084a1c04f0">
      <input type="hidden" name="zc_gad" id="zc_gad" value="">
      <input type="text" style="display:none;" name="xmIwtLD" value="d8b9b02660a4ccee0351e1bc1676bacbee23887ad6c02045294fe3f99f72f596ba2978d78ef41049f0d0e0b22b3f276b">
      <input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
      <input type="text" style="display:none;" name="returnURL" value="https://www.fidigital.com.au/contact">
      <!-- Do not remove this code. -->
      <input type="text" style="display:none;" id="ldeskuid" name="ldeskuid">
      <input type="text" style="display:none;" id="LDTuvid" name="LDTuvid">
      <!-- Do not remove this code. -->

      <div class="form-grid">

        <!-- First Name -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="First_Name">First Name <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="First_Name" name="First Name" placeholder="e.g. John"
              aria-required="true" maxlength="40">
          </div>
        </div>

        <!-- Last Name -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Last_Name">Last Name <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Last_Name" name="Last Name" placeholder="e.g. Smith"
              aria-required="true" maxlength="80">
          </div>
        </div>

        <!-- Email -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Email">Email <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" ftype="email" autocomplete="false" id="Email" name="Email"
              placeholder="john@example.com" aria-required="true" maxlength="100">
          </div>
        </div>

        <!-- Mobile -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Mobile">Mobile <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Mobile" name="Mobile" placeholder="e.g. 0400 000 000"
              aria-required="true" maxlength="30">
          </div>
        </div>

        <!-- Company -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="Company">Company <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="Company" name="Company" placeholder="Your Company Name"
              aria-required="true" maxlength="200">
          </div>
        </div>

        <!-- Company Size -->
        <div class="zcwf_row">
          <div class="zcwf_col_lab">
            <label for="LEADCF55">Company Size</label>
          </div>
          <div class="zcwf_col_fld">
            <input type="text" id="LEADCF55" name="LEADCF55" placeholder="e.g. 50–100" maxlength="9">
          </div>
        </div>

        <!-- Pain Points -->
        <div class="zcwf_row full-width">
          <div class="zcwf_col_lab">
            <label for="LEADCF130">What are your main pain points?</label>
          </div>
          <div class="zcwf_col_fld">
            <textarea id="LEADCF130" name="LEADCF130" placeholder="Describe your challenges…"></textarea>
          </div>
        </div>

        <!-- Description -->
        <div class="zcwf_row full-width">
          <div class="zcwf_col_lab">
            <label for="Description">Description <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <textarea id="Description" name="Description" aria-required="true"
              placeholder="Tell us about your project or requirements…"></textarea>
          </div>
        </div>

        <!-- Captcha -->
        <div class="zcwf_row full-width">
          <div class="zcwf_col_lab">
            <label for="captchaField3209734000015098004">Enter the Captcha <span class="required">*</span></label>
          </div>
          <div class="zcwf_col_fld">
            <div class="captcha-wrapper">
              <div class="captcha-img-row">
                <img id="imgid3209734000015098004"
                  src="https://crm.zoho.com/crm/CaptchaServlet?formId=d8b9b02660a4ccee0351e1bc1676bacbee23887ad6c02045294fe3f99f72f596ba2978d78ef41049f0d0e0b22b3f276b&grpid=36759fdb49005e835b1ab8dfaa6b5260efd73870a91b3d99aeed88084a1c04f0"
                  alt="Captcha image">
                <a class="reload-link" onclick="reloadImg3209734000015098004();">&#8635; Reload Captcha</a>
              </div>
              <input type="text" id="captchaField3209734000015098004" name="enterdigest"
                placeholder="Type the characters above" maxlength="10">
            </div>
          </div>
        </div>

      </div><!-- /.form-grid -->

      <!-- Hidden: Business Entity (Do not remove) -->
      <div class="zcwf_row wfrm_fld_dpNn">
        <div class="zcwf_col_lab"><label for="LEADCF48">Business Entity</label></div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="LEADCF48"
            onchange="addAriaSelected3209734000015098004()" name="LEADCF48">
            <option value="-None-">-None-</option>
            <option value="Fristine Infotech">Fristine Infotech</option>
            <option selected value="FI Digital">FI Digital</option>
            <option value="DSV Corp">DSV Corp</option>
            <option value="FI Digital MEA">FI Digital MEA</option>
            <option value="FI Digital UK">FI Digital UK</option>
            <option value="FI Digital US">FI Digital US</option>
            <option value="FI Digital NZ">FI Digital NZ</option>
          </select>
        </div>
      </div>

      <!-- Hidden: Lead Status (Do not remove) -->
      <div class="zcwf_row wfrm_fld_dpNn">
        <div class="zcwf_col_lab"><label for="Lead_Status">Lead Status</label></div>
        <div class="zcwf_col_fld">
          <select class="zcwf_col_fld_slt" id="Lead_Status"
            onchange="addAriaSelected3209734000015098004()" name="Lead Status">
            <option value="-None-">-None-</option>
            <option value="Not Contacted">Not Contacted</option>
            <option value="Attempted to Contact">Attempted to Contact</option>
            <option value="Contact In Future">Contact In Future</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Junk Lead">Junk Lead</option>
            <option value="Lost Lead">Lost Lead</option>
            <option value="Unqualified">Unqualified</option>
            <option selected value="New Lead">New Lead</option>
          </select>
        </div>
      </div>

      <input type="hidden" name="aG9uZXlwb3Q" value="">

      <div class="button-row">
        <input type="submit" id="formsubmit" role="button"
          class="zcwf_button formsubmit" value="Submit Inquiry" aria-label="Submit">
        <input type="reset" class="zcwf_button btn-reset" role="button"
          name="reset" value="Reset" aria-label="Reset">
      </div>

      <!-- Do not remove this code. -->
      <script>
        function addAriaSelected3209734000015098004() {
          var optionElem = event.target;
          var prev = optionElem.querySelector('[aria-selected=true]');
          if (prev) prev.removeAttribute('aria-selected');
          optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        }

        /* Do not remove this code. */
        function reloadImg3209734000015098004() {
          var captcha = document.getElementById('imgid3209734000015098004');
          if (captcha.src.indexOf('&d') !== -1) {
            captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
          } else {
            captcha.src = captcha.src + '&d' + new Date().getTime();
          }
        }

        function historyBack3209734000015098004() {
          document.querySelector('.crmWebToEntityForm .formsubmit') &&
            document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
          document.getElementById('formsubmit').removeAttribute('disabled');
          reloadImg3209734000015098004();
          window.removeEventListener('focus', historyBack3209734000015098004);
        }

        function validateEmail3209734000015098004() {
          var form = document.forms['WebToLeads3209734000015098004'];
          var emailFld = form.querySelectorAll('[ftype=email]');
          for (var i = 0; i < emailFld.length; i++) {
            var emailVal = emailFld[i].value.trim();
            if (emailVal.length !== 0) {
              var atpos = emailVal.indexOf('@');
              var dotpos = emailVal.lastIndexOf('.');
              if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                alert('Please enter a valid email address.');
                emailFld[i].focus();
                return false;
              }
            }
          }
          return true;
        }

        function checkMandatory3209734000015098004() {
          var mndFileds = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'Description'];
          var fldLangVal = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'Description'];
          var form = document.forms['WebToLeads3209734000015098004'];
          for (var i = 0; i < mndFileds.length; i++) {
            var fieldObj = form[mndFileds[i]];
            if (fieldObj) {
              if (fieldObj.value.replace(/^\\s+|\\s+$/g, '').length === 0) {
                if (fieldObj.type === 'file') { alert('Please select a file to upload.'); fieldObj.focus(); return false; }
                alert(fldLangVal[i] + ' cannot be empty.');
                fieldObj.focus();
                return false;
              } else if (fieldObj.nodeName === 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
                  alert(fldLangVal[i] + ' cannot be none.');
                  fieldObj.focus();
                  return false;
                }
              } else if (fieldObj.type === 'checkbox') {
                if (!fieldObj.checked) { alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
              }
              try { if (fieldObj.name === 'Last Name') { name = fieldObj.value; } } catch(e) {}
            }
          }
          trackVisitor3209734000015098004();
          if (!validateEmail3209734000015098004()) return false;
          var urlparams = new URLSearchParams(window.location.search);
          if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
            var webform = document.getElementById('webform3209734000015098004');
            var smarturlfield = document.createElement('input');
            smarturlfield.setAttribute('type', 'hidden');
            smarturlfield.setAttribute('value', urlparams.get('service'));
            smarturlfield.setAttribute('name', 'service');
            webform.appendChild(smarturlfield);
          }
          document.getElementById('formsubmit').setAttribute('disabled', true);
          window.addEventListener('focus', historyBack3209734000015098004);
        }

        function tooltipShow3209734000015098004(el) {
          var tooltip = el.nextElementSibling;
          if (tooltip.style.display === 'none' || tooltip.style.display === '') {
            tooltip.style.display = 'block';
          } else {
            tooltip.style.display = 'none';
          }
        }
      </script>

      <!-- SalesIQ is loaded globally via app layout - trackVisitor is a no-op here -->
      <script>
        function trackVisitor3209734000015098004() {
          try {
            if (typeof $zoho !== 'undefined' && $zoho.salesiq) {
              var LDTuvidObj = document.forms['WebToLeads3209734000015098004']['LDTuvid'];
              if (LDTuvidObj) { LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid(); }
              
              var firstName = document.forms['WebToLeads3209734000015098004']['First Name'].value;
              var lastName = document.forms['WebToLeads3209734000015098004']['Last Name'].value;
              var fullName = (firstName + ' ' + lastName).trim();
              
              if (fullName) { $zoho.salesiq.visitor.name(fullName); }
              
              var emailObj = document.forms['WebToLeads3209734000015098004']['Email'];
              if (emailObj && emailObj.value) { $zoho.salesiq.visitor.email(emailObj.value); }
            }
          } catch(e) {}
        }
      </script>

      <script src="https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd479349cf2623ac0e2534848ba831a5d7b5"></script>

      <!-- Do not remove this --- Analytics Tracking code starts -->
      <script id="wf_anal" src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=a000a405f83325ece81646bbab0b5daef2d44503568edf1176dd8487c47297b824dfa4d4d29d04d5d66db27e8a33ceccgid19df8bf99fe4c3c36f218c4f15bab0a4f88cb55fbb546436947ec0f76690a418gid11cd10dacdd70a9c2408b583af8f99257bdc955dc109e1ae79d6ff7ba2f87838gid7c8d27518192a0894dbedbfbc55cdceaba012138e755d0dfa57947344c7a6e98&tw=f8cf81ed22754ea98d6e3adae8921084ee3c3fd42380cd315d99e778bb3c3efc"></script>
      <!-- Do not remove this --- Analytics Tracking code ends. -->

    </form>
    <!-- Do not remove this code. -->
    <iframe name="captchaFrame" style="display:none;"></iframe>
  </div>

  <!-- Theme Detection + Auto-height reporting -->
  <script>
    (function() {
      function applyTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      }
      window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'theme') { applyTheme(e.data.isDark); }
      });
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mq.matches);
      mq.addEventListener('change', function(e) { applyTheme(e.matches); });

      // Report body height to parent so iframe resizes automatically
      function reportHeight() {
        var h = document.documentElement.scrollHeight || document.body.scrollHeight;
        window.parent.postMessage({ type: 'iframeHeight', height: h }, '*');
      }
      // Report on load, resize, and DOM mutations
      window.addEventListener('load', reportHeight);
      window.addEventListener('resize', reportHeight);
      var ro = new ResizeObserver(reportHeight);
      ro.observe(document.body);
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
