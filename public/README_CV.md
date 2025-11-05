Place your CV PDF in this project's `public` folder with the exact filename `Danish_Nawaz_CV.pdf`.

When the file exists at `/Danish_Nawaz_CV.pdf`, clicking the "Download CV" button on the site will download that PDF.

To replace the placeholder, copy your PDF here (Windows PowerShell example):

```powershell
cp "C:\path\to\YourCV.pdf" "./public/Danish_Nawaz_CV.pdf"
```

If you prefer a different filename, update the `href` in `src/components/Hero.tsx` accordingly.
