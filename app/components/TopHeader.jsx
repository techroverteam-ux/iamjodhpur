'use client';

export default function TopHeader() {
  return (
    <section className="top_heads top_heads_header top-head" style={{ background: '#1977f3' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 munberss">
            <a href="tel:9828019432" className="text-white">
              <i className="fa fa-phone" aria-hidden="true"></i> +91 - 9828019432
            </a>
            <a href="mailto:ceo.imajodhpur@gmail.com" className="text-white pull-right">
              <i className="fa fa-envelope-o" aria-hidden="true"></i> ceo.imajodhpur@gmail.com
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .top_heads {
          padding: 4px;
        }
        .top_heads_header {
          position: sticky;
          top: 0;
          z-index: 999;
        }
        .munberss a {
          margin: 0 9px 0 0;
          color: #fff;
        }
        .pull-right {
          float: right;
        }
      `}</style>
    </section>
  );
}
