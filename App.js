export default function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/kitchen-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
        color: "#333"
      }}
    >
      <header style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
        <img
          src="/qamar.jpg"
          alt="شعار قمر مشرف"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            marginRight: "10px"
          }}
        />
        <div style={{ textAlign: "right" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>قمر مشرف</h1>
          <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>وصفات طبخ وحلويات لذيذة وسهلة</p>
        </div>
      </header>

      <main style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <section style={{ background: "#f9f9f9", padding: "16px", borderRadius: "16px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>📺 فيديو اليوم</h2>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=قمر مشرف"
              title="فيديو اليوم"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px" }}
            ></iframe>
          </div>
        </section>

        <section style={{ display: "grid", gap: "16px" }}>
          {[
            { title: "🍰 حلويات", description: "أطيب وصفات الحلويات الشرقية والغربية." },
            { title: "🥘 أكلات رئيسية", description: "أطباق مميزة وسهلة التحضير لكل يوم." },
            { title: "🍹 مشروبات", description: "عصائر، سموزي، ومشروبات رمضانية منعشة." }
          ].map((category, index) => (
            <div key={index} style={{ background: "#ffeef1", padding: "16px", borderRadius: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </section>

        <section style={{ background: "#fff6e5", padding: "16px", borderRadius: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>📖 وصفات مكتوبة</h2>
          <ul style={{ paddingRight: "20px" }}>
            <li>خلية النحل الهشة بـ5 مكونات فقط</li>
            <li>بودينغ البسكويت بطبقات لذيذة</li>
            <li>شوربة العدس السريعة والمغذية</li>
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: "center", fontSize: "12px", color: "#999", marginTop: "40px" }}>
        &copy; {new Date().getFullYear()} قمر مشرف. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}