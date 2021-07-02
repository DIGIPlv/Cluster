window.addEventListener('load', function() {
  document.getElementById("newsletter-box").checked = true;
});
// Optioanl input fields
let freelancerElectronicBox = document.getElementById('freelancer-electronic-box');
let freelancerAddressField = document.getElementById('input-address');
let freelancerCodeField = document.getElementById('input-code');
let freelancerAddresLable = document.getElementById('lable-address');
let freelancerAddresInput = document.getElementById('wrap-address');
let freelancerCodeLable = document.getElementById('lable-code');
let freelancerCodeInput = document.getElementById('wrap-code');
// Type select
let dropDown = document.getElementById('dropdown');
let freelancerNameLable = document.getElementById('freelancer-name-lable');
let freelancerNameInput = document.getElementById('freelancer-name-input');
let freelancerNameField = document.getElementById('freelancer-name-field');
let freelancerEmailLable = document.getElementById('freelancer-email-lable');
let freelancerEmailInput = document.getElementById('freelancer-email-input');
let freelancerEmailField = document.getElementById('freelancer-email-field');
let freelancerPhoneLable = document.getElementById('freelancer-phone-lable');
let freelancerPhoneInput = document.getElementById('freelancer-phone-input');
let freelancerPhoneField = document.getElementById('freelancer-phone-field');
let freelancerJobtitleLable = document.getElementById('freelancer-jobtitle-lable');
let freelancerJobtitleInput = document.getElementById('freelancer-jobtitle-input');
let freelancerJobtitleField = document.getElementById('freelancer-jobtitle-field');
let freelancerStudentLable = document.getElementById('freelancer-student-lable');
let freelancerStudentInput = document.getElementById('freelancer-student-input');
let freelancerStudentBox = document.getElementById('freelancer-student-box');
let freelancerMotivationLable = document.getElementById('freelancer-motivation-lable');
let freelancerMotivationInput = document.getElementById('freelancer-motivation-input');
let freelancerMotivationField = document.getElementById('freelancer-motivation-field');
let freelancerElectronicLable = document.getElementById('freelancer-electronic-lable');
let freelancerElectronicInput = document.getElementById('freelancer-electronic-input');
let companyNameLable = document.getElementById('company-name-lable');
let companyNameInput = document.getElementById('company-name-input');
let companyNameField = document.getElementById('company-name-field');
let companyNumberLable = document.getElementById('company-registration-lable');
let companyNumberInput = document.getElementById('company-registration-input');
let companyNumberField = document.getElementById('company-registration-field');
let companyAddressLable = document.getElementById('company-address-lable');
let companyAddressInput = document.getElementById('company-address-input');
let companyAddressField = document.getElementById('company-address-field');
let companySignitureLable = document.getElementById('company-signiture-lable');
let companySignitureInput = document.getElementById('company-signiture-input');
let companySignitureField = document.getElementById('company-signiture-field');
let companySignatureTitleLable = document.getElementById('company-signiture-title-lable');
let companySignatureTitleInput = document.getElementById('company-signiture-title-input');
let companySignatureTitleField = document.getElementById('company-signature-title-field');
let companyContactNameLable = document.getElementById('company-contact-name-lable');
let companyContactNameInput = document.getElementById('company-contact-name-input');
let companyContactNameField = document.getElementById('company-contact-name-field');
let companyContactJobtitleLable = document.getElementById('company-contact-jobtitle-lable');
let companyContactJobtitleInput = document.getElementById('company-contact-jobtitle-input');
let companyContactJobtitleField = document.getElementById('company-contact-jobtitle-field');
let companyEmailLable = document.getElementById('company-email-lable');
let companyEmailInput = document.getElementById('company-email-input');
let companyEmailField = document.getElementById('company-email-field');
let companyPhoneLable = document.getElementById('company-phone-lable');
let companyPhoneInput = document.getElementById('company-phone-input');
let companyPhoneField = document.getElementById('company-phone-field');
let companyDescriptionLable = document.getElementById('company-description-lable');
let companyDescriptionInput = document.getElementById('company-description-input');
let companyDescriptionField = document.getElementById('company-description-field');
let newsletterLable = document.getElementById("newsletter-lable");
let newsletterInput = document.getElementById("newsletter-input");
let newsletterBox = document.getElementById("newsletter-box");
let isStudenChecked = false;
let isNewsletterChecked = false;

dropDown.addEventListener('change', (e) => {
  if (e.target.value == 'Pašnodarbinātais' || e.target.value == 'Privātpersona') {
    freelancerNameLable.style.display = 'block';
    freelancerNameInput.style.display = 'block';
    freelancerNameField.required = true;
    freelancerEmailLable.style.display = 'block';
    freelancerEmailInput.style.display = 'block';
    freelancerEmailField.required = true;
    freelancerPhoneLable.style.display = 'block';
    freelancerPhoneInput.style.display = 'block';
    freelancerPhoneField.required = true;
    freelancerJobtitleLable.style.display = 'block';
    freelancerJobtitleInput.style.display = 'block';
    freelancerStudentLable.style.display = 'block';
    freelancerStudentInput.style.display = 'block';
    freelancerMotivationLable.style.display = 'block';
    freelancerMotivationInput.style.display = 'block';
    freelancerElectronicLable.style.display = 'block';
    freelancerElectronicInput.style.display = 'block';
    if(isStudenChecked)
    {
      freelancerStudentBox.checked = true;
    }
    if(freelancerElectronicBox.checked)
    {
      freelancerAddresLable.style.display = 'block';
      freelancerAddresInput.style.display = 'block';
      freelancerCodeLable.style.display = 'block';
      freelancerCodeInput.style.display = 'block';
      freelancerAddressField.required = true;
      freelancerCodeField.required = true;
    }
    companyNameLable.style.display = 'none';
    companyNameInput.style.display = 'none';
    companyNameField.required = false;
    companyNameField.value = null;
    companyNumberLable.style.display = 'none';
    companyNumberInput.style.display = 'none';
    companyNumberField.required = false;
    companyNumberField.value = null;
    companyAddressLable.style.display = 'none';
    companyAddressInput.style.display = 'none';
    companyAddressField.required = false;
    companyAddressField.value = null;
    companySignitureLable.style.display = 'none';
    companySignitureInput.style.display = 'none';
    companySignitureField.required = false;
    companySignitureField.value = null;
    companySignatureTitleLable.style.display = 'none';
    companySignatureTitleInput.style.display = 'none';
    companySignatureTitleField.required = false;
    companyContactNameLable.style.display = 'none';
    companyContactNameInput.style.display = 'none';
    companyContactNameField.required = false;
    companyContactNameField.value = null;
    companyContactJobtitleLable.style.display = 'none';
    companyContactJobtitleInput.style.display = 'none';
    companyContactJobtitleField.required = false;
    companyContactJobtitleField.value = null;
    companyEmailLable.style.display = 'none';
    companyEmailInput.style.display = 'none';
    companyEmailField.required = false;
    companyEmailField.value = null;
    companyPhoneLable.style.display = 'none';
    companyPhoneInput.style.display = 'none';
    companyPhoneField.required = false;
    companyPhoneField.value = null;
    companyDescriptionLable.style.display = 'none';
    companyDescriptionInput.style.display = 'none';
    companyDescriptionField.value = null;
    if(newsletterBox.checked)
    {
      isNewsletterChecked = true;
    }
    else
    {
      isNewsletterChecked = false;
    }
    newsletterBox.checked = true;
    newsletterLable.style.display = 'none';
    newsletterInput.style.display = 'none';
  } else {
    freelancerNameLable.style.display = 'none';
    freelancerNameInput.style.display = 'none';
    freelancerNameField.required = false;
    freelancerNameField.value = null;
    freelancerEmailLable.style.display = 'none';
    freelancerEmailInput.style.display = 'none';
    freelancerEmailField.required = false;
    freelancerEmailField.value = null;
    freelancerPhoneLable.style.display = 'none';
    freelancerPhoneInput.style.display = 'none';
    freelancerPhoneField.required = false;
    freelancerPhoneField.value = null;
    freelancerJobtitleLable.style.display = 'none';
    freelancerJobtitleInput.style.display = 'none';
    freelancerJobtitleField.value = null;
    freelancerStudentLable.style.display = 'none';
    freelancerStudentInput.style.display = 'none';
    if(freelancerStudentBox.checked)
    {
      isStudenChecked = true;
    }
    else
    {
      isStudenChecked = false;
    }
    freelancerStudentBox.checked = false;
    freelancerMotivationLable.style.display = 'none';
    freelancerMotivationInput.style.display = 'none';
    freelancerMotivationField.value = null;
    freelancerAddressField.value = null;
    freelancerCodeField.value = null;
    companyNameLable.style.display = 'block';
    companyNameInput.style.display = 'block';
    companyNameField.required = true;
    companyNumberLable.style.display = 'block';
    companyNumberInput.style.display = 'block';
    companyNumberField.required = true;
    companyAddressLable.style.display = 'block';
    companyAddressInput.style.display = 'block';
    companyAddressField.required = true;
    companySignitureLable.style.display = 'block';
    companySignitureInput.style.display = 'block';
    companySignitureField.required = true;
    companySignatureTitleLable.style.display = 'block';
    companySignatureTitleInput.style.display = 'block';
    companySignatureTitleField.required = true;
    companyContactNameLable.style.display = 'block';
    companyContactNameInput.style.display = 'block';
    companyContactNameField.required = true;
    companyContactJobtitleLable.style.display = 'block';
    companyContactJobtitleInput.style.display = 'block';
    companyContactJobtitleField.required = true;
    companyEmailLable.style.display = 'block';
    companyEmailInput.style.display = 'block';
    companyEmailField.required = true;
    companyPhoneLable.style.display = 'block';
    companyPhoneInput.style.display = 'block';
    companyPhoneField.required = true;
    companyDescriptionLable.style.display = 'block';
    companyDescriptionInput.style.display = 'block';
    freelancerAddresLable.style.display = 'none';
    freelancerAddresInput.style.display = 'none';
    freelancerCodeLable.style.display = 'none';
    freelancerCodeInput.style.display = 'none';
    freelancerAddressField.required = false;
    freelancerCodeField.required = false;
    if(isNewsletterChecked)
    {
      newsletterBox.checked = true;
    }
    else
    {
      newsletterBox.checked = false;
    }
    newsletterLable.style.display = 'block';
    newsletterInput.style.display = 'block';
  }
});

// Optioanl input fields
freelancerElectronicBox.addEventListener('change', (event) => {
  if(dropDown.value == 'Pašnodarbinātais' || dropDown.value == 'Privātpersona')
    {
      if (event.currentTarget.checked) {
      freelancerAddresLable.style.display = 'block';
      freelancerAddresInput.style.display = 'block';
      freelancerCodeLable.style.display = 'block';
      freelancerCodeInput.style.display = 'block';
      freelancerAddressField.required = true;
      freelancerCodeField.required = true;
    } else {
      freelancerAddresLable.style.display = 'none';
      freelancerAddresInput.style.display = 'none';
      freelancerCodeLable.style.display = 'none';
      freelancerCodeInput.style.display = 'none';
      freelancerAddressField.required = false;
      freelancerCodeField.required = false;
    }
  }
});
