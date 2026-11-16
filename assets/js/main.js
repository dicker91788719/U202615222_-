document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active navigation item
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    const href = a.getAttribute("href");
    if (href === currentPage) a.classList.add("active");
  });

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Scroll reveal
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (el) { observer.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add("visible"); });
  }

  // Back to top
  const topBtn = document.getElementById("backToTop");
  if (topBtn) {
    window.addEventListener("scroll", function () {
      topBtn.classList.toggle("show", window.scrollY > 300);
    });
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact form: open mail client with prefilled content
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = form.elements["visitorName"].value.trim();
      const topic = form.elements["visitorTopic"].value.trim();
      const message = form.elements["visitorMessage"].value.trim();
      if (!name || !message) {
        alert("请填写你的姓名和留言内容。");
        return;
      }
      const subject = encodeURIComponent("个人网页留言：" + (topic || "交流"));
      const body = encodeURIComponent("姓名：" + name + "\n主题：" + topic + "\n\n" + message);
      window.location.href = "mailto:1721263365@qq.com?subject=" + subject + "&body=" + body;
    });
  }

  // Copy homepage URL
  const copyBtn = document.getElementById("copyUrl");
  if (copyBtn) {
    copyBtn.addEventListener("click", async function () {
      const url = copyBtn.getAttribute("data-url") || "";
      try {
        await navigator.clipboard.writeText(url);
        copyBtn.textContent = "已复制 ✓";
        window.setTimeout(function () { copyBtn.textContent = "复制主页地址"; }, 1800);
      } catch (error) {
        alert("复制失败，请手动复制：\n" + url);
      }
    });
  }
});
