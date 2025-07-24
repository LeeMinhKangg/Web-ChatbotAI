const { News } = require('../models');

const sampleNews = [
  {
    title: 'Giải cầu lông toàn quốc 2024 - Những khoảnh khắc đáng nhớ',
    slug: 'giai-cau-long-toan-quoc-2024-nhung-khoanh-khac-dang-nho',
    excerpt: 'Giải cầu lông toàn quốc 2024 đã khép lại với nhiều trận đấu kịch tính và những khoảnh khắc đáng nhớ. Hãy cùng điểm lại những điểm nổi bật của giải đấu.',
    content: `
      <p>Giải cầu lông toàn quốc 2024 đã chính thức khép lại vào ngày 15/7 vừa qua tại Cung thể thao Quần Ngựa, Hà Nội. Đây là một trong những giải đấu cầu lông lớn nhất trong năm, thu hút sự tham gia của hơn 500 vận động viên từ 32 tỉnh thành trên cả nước.</p>
      
      <h3>Những khoảnh khắc đáng nhớ</h3>
      <p>Giải đấu năm nay có nhiều điều bất ngờ và thú vị. Đặc biệt, trận chung kết đơn nam giữa Nguyễn Tiến Minh và Lê Đức Phát đã kéo dài 3 set với tỷ số 21-19, 18-21, 21-18, mang đến những phút giây hồi hộp cho khán giả.</p>
      
      <h3>Kết quả chung cuộc</h3>
      <ul>
        <li><strong>Đơn nam:</strong> Nguyễn Tiến Minh (TP.HCM)</li>
        <li><strong>Đơn nữ:</strong> Vũ Thị Trang (Hà Nội)</li>
        <li><strong>Đôi nam:</strong> Đỗ Tuấn Đức/Phạm Cao Cường (TP.HCM)</li>
        <li><strong>Đôi nữ:</strong> Nguyễn Thúy Linh/Châu Tuyết Mai (Hà Nội)</li>
        <li><strong>Đôi nam nữ:</strong> Nguyễn Tiến Minh/Vũ Thị Trang</li>
      </ul>
      
      <p>Giải đấu không chỉ là nơi tranh tài của các vận động viên mà còn là cơ hội để quảng bá môn cầu lông đến với đông đảo người dân.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1544464130-6d3b0ac65ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Phạm Văn Minh',
    status: 'published',
    tags: ['cầu lông', 'giải đấu', 'thể thao', 'Việt Nam'],
    seoTitle: 'Giải cầu lông toàn quốc 2024 - Những khoảnh khắc đáng nhớ',
    seoDescription: 'Tổng hợp những khoảnh khắc đáng nhớ và kết quả của Giải cầu lông toàn quốc 2024 tại Hà Nội.',
    publishedAt: new Date('2024-07-16'),
    viewCount: 1250
  },
  {
    title: 'Hướng dẫn chọn vợt cầu lông phù hợp cho người mới bắt đầu',
    slug: 'huong-dan-chon-vot-cau-long-phu-hop-cho-nguoi-moi-bat-dau',
    excerpt: 'Việc chọn một cây vợt cầu lông phù hợp là rất quan trọng đối với người mới bắt đầu. Bài viết này sẽ hướng dẫn bạn những tiêu chí cần lưu ý khi chọn vợt.',
    content: `
      <p>Cầu lông là môn thể thao phổ biến và được yêu thích tại Việt Nam. Để bắt đầu chơi cầu lông, việc chọn một cây vợt phù hợp là vô cùng quan trọng.</p>
      
      <h3>Các yếu tố cần xem xét</h3>
      
      <h4>1. Trọng lượng vợt</h4>
      <p>Đối với người mới bắt đầu, nên chọn vợt có trọng lượng từ 85-90g. Vợt nhẹ sẽ giúp bạn dễ dàng điều khiển và ít bị mỏi tay.</p>
      
      <h4>2. Độ cứng của thân vợt</h4>
      <p>Vợt có thân mềm sẽ phù hợp với người mới bắt đầu vì dễ tạo ra lực đánh và ít gây chấn thương.</p>
      
      <h4>3. Cân bằng vợt</h4>
      <p>Có 3 loại cân bằng chính:</p>
      <ul>
        <li><strong>Head Light:</strong> Trọng tâm về phía cán, phù hợp cho người thích tốc độ</li>
        <li><strong>Head Heavy:</strong> Trọng tâm về phía đầu vợt, tạo lực đập mạnh</li>
        <li><strong>Even Balance:</strong> Cân bằng, phù hợp cho người mới bắt đầu</li>
      </ul>
      
      <h4>4. Căng dây vợt</h4>
      <p>Đối với người mới, nên căng dây ở mức 20-22 lbs. Dây căng vừa phải sẽ giúp kiểm soát cầu tốt hơn.</p>
      
      <h3>Một số thương hiệu vợt được khuyến nghị</h3>
      <ul>
        <li>Yonex - Thương hiệu hàng đầu thế giới</li>
        <li>Victor - Chất lượng tốt, giá cả hợp lý</li>
        <li>Mizuno - Thiết kế đẹp, độ bền cao</li>
        <li>Li-Ning - Công nghệ tiên tiến, giá cạnh tranh</li>
      </ul>
      
      <p>Hy vọng những thông tin trên sẽ giúp bạn chọn được cây vợt cầu lông phù hợp để bắt đầu hành trình tập luyện của mình!</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Lê Thị Hương',
    status: 'published',
    tags: ['vợt cầu lông', 'hướng dẫn', 'người mới bắt đầu', 'thiết bị'],
    seoTitle: 'Hướng dẫn chọn vợt cầu lông cho người mới bắt đầu - Tips hay',
    seoDescription: 'Hướng dẫn chi tiết cách chọn vợt cầu lông phù hợp cho người mới bắt đầu. Các tiêu chí về trọng lượng, độ cứng, cân bằng vợt.',
    publishedAt: new Date('2024-07-10'),
    viewCount: 2180
  },
  {
    title: 'Top 5 kỹ thuật cơ bản trong cầu lông mà bạn cần nắm vững',
    slug: 'top-5-ky-thuat-co-ban-trong-cau-long-ma-ban-can-nam-vung',
    excerpt: 'Để chơi cầu lông hiệu quả, bạn cần nắm vững các kỹ thuật cơ bản. Bài viết này sẽ giới thiệu 5 kỹ thuật quan trọng nhất mà mọi người chơi cầu lông cần biết.',
    content: `
      <p>Cầu lông là môn thể thao đòi hỏi sự kết hợp giữa kỹ thuật, thể lực và chiến thuật. Để trở thành một tay vợt giỏi, bạn cần nắm vững các kỹ thuật cơ bản.</p>
      
      <h3>1. Kỹ thuật cầm vợt</h3>
      <p>Đây là kỹ thuật đầu tiên và quan trọng nhất. Cách cầm vợt đúng sẽ giúp bạn kiểm soát cầu tốt hơn và tránh chấn thương.</p>
      <ul>
        <li>Cầm vợt như bắt tay: Đặt tay vào cán vợt như thể bạn đang bắt tay ai đó</li>
        <li>Không cầm quá chặt: Giữ vợt một cách thoải mái, không căng thẳng</li>
        <li>Vị trí ngón tay: Ngón cái và ngón trỏ tạo thành hình chữ V</li>
      </ul>
      
      <h3>2. Tư thế sẵn sàng (Ready Position)</h3>
      <p>Tư thế sẵn sàng giúp bạn di chuyển nhanh chóng đến mọi vị trí trên sân.</p>
      <ul>
        <li>Chân mở rộng bằng vai</li>
        <li>Đầu gối hơi cong</li>
        <li>Trọng tâm ở mu bàn chân</li>
        <li>Vợt giữ ở vị trí trung tâm</li>
      </ul>
      
      <h3>3. Kỹ thuật di chuyển chân</h3>
      <p>Di chuyển đúng cách giúp bạn đến vị trí đánh cầu một cách nhanh chóng và hiệu quả.</p>
      <ul>
        <li>Bước đôi (Split Step): Nhảy nhẹ để sẵn sàng di chuyển</li>
        <li>Bước lùi: Chân không thuận lùi lại trước</li>
        <li>Bước tới: Chân thuận bước lên trước</li>
        <li>Bước nghiêng: Di chuyển chéo để đến các góc sân</li>
      </ul>
      
      <h3>4. Kỹ thuật đánh cầu cao (Clear)</h3>
      <p>Đây là kỹ thuật cơ bản giúp bạn đưa cầu về sâu sân đối phương.</p>
      <ul>
        <li>Đứng nghiêng với sân</li>
        <li>Tay không cầm vợt chỉ lên cầu</li>
        <li>Đánh cầu ở điểm cao nhất</li>
        <li>Follow through về phía trước</li>
      </ul>
      
      <h3>5. Kỹ thuật đánh cầu gần lưới (Net Shot)</h3>
      <p>Kỹ thuật này giúp bạn kiểm soát tốc độ trận đấu và tạo cơ hội tấn công.</p>
      <ul>
        <li>Tiến lên gần lưới</li>
        <li>Sử dụng chuyển động cổ tay nhẹ nhàng</li>
        <li>Đặt cầu sát lưới phía đối phương</li>
        <li>Nhanh chóng trở về vị trí trung tâm</li>
      </ul>
      
      <h3>Lời khuyên để luyện tập hiệu quả</h3>
      <p>Để nắm vững các kỹ thuật trên, bạn cần:</p>
      <ul>
        <li>Luyện tập thường xuyên và kiên trì</li>
        <li>Bắt đầu với tốc độ chậm, tập trung vào độ chính xác</li>
        <li>Tìm hiểu từ các huấn luyện viên có kinh nghiệm</li>
        <li>Xem video hướng dẫn và phân tích kỹ thuật của các tay vợt chuyên nghiệp</li>
      </ul>
      
      <p>Chúc bạn sớm nắm vững các kỹ thuật cơ bản và trở thành một tay vợt cầu lông giỏi!</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Trần Văn Nam',
    status: 'published',
    tags: ['kỹ thuật', 'cầu lông', 'cơ bản', 'hướng dẫn', 'luyện tập'],
    seoTitle: 'Top 5 kỹ thuật cơ bản trong cầu lông - Hướng dẫn chi tiết',
    seoDescription: 'Tìm hiểu 5 kỹ thuật cơ bản trong cầu lông: cách cầm vợt, tư thế sẵn sàng, di chuyển chân, đánh cầu cao và kỹ thuật gần lưới.',
    publishedAt: new Date('2024-07-05'),
    viewCount: 3420
  },
  {
    title: 'Lịch sử và sự phát triển của môn cầu lông tại Việt Nam',
    slug: 'lich-su-va-su-phat-trien-cua-mon-cau-long-tai-viet-nam',
    excerpt: 'Môn cầu lông đã có mặt tại Việt Nam từ lâu và trở thành một trong những môn thể thao phổ biến nhất. Hãy cùng tìm hiểu về lịch sử phát triển của môn thể thao này.',
    content: `
      <p>Cầu lông là một trong những môn thể thao được yêu thích nhất tại Việt Nam, từ trẻ em đến người cao tuổi đều có thể tham gia. Nhưng bạn có biết môn thể thao này đã có mặt tại nước ta từ bao giờ?</p>
      
      <h3>Khởi nguồn của cầu lông tại Việt Nam</h3>
      <p>Cầu lông được du nhập vào Việt Nam vào đầu thế kỷ 20 thông qua người Pháp. Ban đầu, môn thể thao này chỉ phổ biến trong các câu lạc bộ của người Pháp và một số gia đình giàu có.</p>
      
      <p>Sau năm 1945, cầu lông bắt đầu được phổ biến rộng rãi hơn trong nhân dân. Các sân cầu lông đầu tiên được xây dựng tại Hà Nội và Sài Gòn.</p>
      
      <h3>Giai đoạn phát triển mạnh mẽ (1960-1990)</h3>
      <p>Từ thập niên 1960, cầu lông chính thức trở thành môn thể thao được tổ chức có hệ thống tại Việt Nam:</p>
      <ul>
        <li><strong>1962:</strong> Thành lập Liên đoàn Cầu lông Việt Nam</li>
        <li><strong>1965:</strong> Tổ chức giải cầu lông toàn quốc đầu tiên</li>
        <li><strong>1970:</strong> Việt Nam bắt đầu tham gia các giải đấu quốc tế</li>
        <li><strong>1980:</strong> Xây dựng hệ thống đào tạo vận động viên chuyên nghiệp</li>
      </ul>
      
      <h3>Những thành tựu đáng tự hào</h3>
      <p>Cầu lông Việt Nam đã đạt được nhiều thành tích đáng tự hào trên đấu trường quốc tế:</p>
      
      <h4>Tại SEA Games</h4>
      <ul>
        <li>Từ 1991 đến nay: Hơn 50 huy chương vàng</li>
        <li>Luôn nằm trong top 3 môn cầu lông khu vực Đông Nam Á</li>
      </ul>
      
      <h4>Tại Asian Games</h4>
      <ul>
        <li>1998: Huy chương đồng đầu tiên (Nguyễn Tiến Minh)</li>
        <li>2006: Huy chương bạc nội dung đôi nam</li>
        <li>2010: Nhiều huy chương đồng ở các nội dung</li>
      </ul>
      
      <h4>Tại Olympic và World Championships</h4>
      <p>Mặc dù chưa giành được huy chương, nhưng cầu lông Việt Nam đã có mặt thường xuyên tại các giải đấu hàng đầu thế giới và liên tục cải thiện thành tích.</p>
      
      <h3>Những tay vợt nổi tiếng</h3>
      <p>Việt Nam đã sản sinh ra nhiều tay vợt tài năng được quốc tế công nhận:</p>
      <ul>
        <li><strong>Nguyễn Tiến Minh:</strong> Tay vợt số 1 Việt Nam, từng đạt hạng 8 thế giới</li>
        <li><strong>Vũ Thị Trang:</strong> Tay vợt nữ hàng đầu khu vực</li>
        <li><strong>Nguyễn Thúy Linh:</strong> Tài năng trẻ đầy triển vọng</li>
        <li><strong>Lê Đức Phát:</strong> Kế thừa thành công của Tiến Minh</li>
      </ul>
      
      <h3>Cầu lông quần chúng ngày nay</h3>
      <p>Hiện tại, cầu lông đã trở thành môn thể thao phổ biến nhất tại Việt Nam:</p>
      <ul>
        <li>Có mặt tại mọi tỉnh thành</li>
        <li>Hàng triệu người tham gia thường xuyên</li>
        <li>Hệ thống sân cầu lông phát triển mạnh mẽ</li>
        <li>Nhiều giải đấu từ nghiệp dư đến chuyên nghiệp</li>
      </ul>
      
      <h3>Tương lai của cầu lông Việt Nam</h3>
      <p>Với sự đầu tư mạnh mẽ của Nhà nước và sự quan tâm của người dân, cầu lông Việt Nam hứa hẹn sẽ tiếp tục phát triển và đạt được những thành tích cao hơn nữa trên đấu trường quốc tế.</p>
      
      <p>Đặc biệt, với việc áp dụng khoa học công nghệ vào tập luyện và sự xuất hiện của nhiều tài năng trẻ, chúng ta có thể kỳ vọng vào một tương lai tươi sáng cho cầu lông Việt Nam.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Đặng Minh Quân',
    status: 'published',
    tags: ['lịch sử', 'cầu lông', 'Việt Nam', 'thể thao', 'phát triển'],
    seoTitle: 'Lịch sử cầu lông Việt Nam - Từ khởi nguồn đến hiện tại',
    seoDescription: 'Tìm hiểu lịch sử phát triển của môn cầu lông tại Việt Nam từ đầu thế kỷ 20 đến nay, những thành tích đáng tự hào và tương lai phát triển.',
    publishedAt: new Date('2024-06-28'),
    viewCount: 890
  }
];

async function seedNews() {
  try {
    console.log('Bắt đầu thêm dữ liệu tin tức mẫu...');
    
    // Clear existing news
    await News.destroy({ where: {} });
    console.log('Đã xóa dữ liệu tin tức cũ');
    
    // Insert sample news
    for (const news of sampleNews) {
      await News.create(news);
      console.log(`Đã thêm tin tức: ${news.title}`);
    }
    
    console.log('Hoàn thành thêm dữ liệu tin tức mẫu!');
    console.log(`Đã thêm ${sampleNews.length} tin tức`);
    
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu tin tức:', error);
  }
}

module.exports = { seedNews };

// Run if called directly
if (require.main === module) {
  seedNews().then(() => {
    console.log('Script hoàn thành');
    process.exit(0);
  }).catch((error) => {
    console.error('Script thất bại:', error);
    process.exit(1);
  });
}