import { Article } from './types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Hiểu Rõ Về Bệnh Tiểu Đường Type 2 và Cách Quản Lý',
    summary: 'Tiểu đường type 2 là một bệnh mãn tính phổ biến. Bài viết này cung cấp kiến thức toàn diện về nguyên nhân, triệu chứng và các phương pháp quản lý hiệu quả.',
    imageUrl: 'https://picsum.photos/seed/diabetes1/600/400',
    category: 'Tiểu Đường',
    categoryColor: 'bg-blue-100 text-blue-800',
    content: `
      <p>Bệnh tiểu đường type 2 là một rối loạn chuyển hóa đặc trưng bởi tình trạng lượng đường trong máu cao. Đây là dạng tiểu đường phổ biến nhất, chiếm khoảng 90-95% tổng số các trường hợp.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Nguyên nhân gây bệnh</h3>
      <p>Nguyên nhân chính là do cơ thể không sản xuất đủ insulin hoặc các tế bào trở nên kháng với insulin. Insulin là một hormone do tuyến tụy sản xuất, có vai trò giúp glucose (đường) từ máu đi vào tế bào để cung cấp năng lượng. Khi có sự kháng insulin, đường sẽ tích tụ trong máu thay vì đi vào tế bào.</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Yếu tố di truyền: Tiền sử gia đình có người mắc bệnh.</li>
        <li>Lối sống: Thừa cân, béo phì, ít vận động thể chất.</li>
        <li>Chế độ ăn uống: Ăn nhiều thực phẩm chế biến sẵn, đồ ngọt và chất béo bão hòa.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-6 mb-3">Phương pháp quản lý</h3>
      <p>Quản lý tiểu đường type 2 là một quá trình lâu dài, đòi hỏi sự kết hợp giữa thay đổi lối sống và điều trị y tế:</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Dinh dưỡng hợp lý:</strong> Tập trung vào rau xanh, ngũ cốc nguyên hạt, protein nạc và hạn chế đường, tinh bột tinh chế.</li>
        <li><strong>Tập thể dục đều đặn:</strong> Ít nhất 150 phút hoạt động cường độ trung bình mỗi tuần.</li>
        <li><strong>Theo dõi đường huyết:</strong> Kiểm tra đường huyết tại nhà theo chỉ dẫn của bác sĩ.</li>
        <li><strong>Sử dụng thuốc:</strong> Bác sĩ có thể kê đơn thuốc uống hoặc insulin để kiểm soát đường huyết.</li>
      </ol>
      <p>Việc tuân thủ một kế hoạch điều trị chặt chẽ không chỉ giúp kiểm soát bệnh mà còn ngăn ngừa các biến chứng nguy hiểm như bệnh tim mạch, tổn thương thận và các vấn đề về thị lực.</p>
    `,
  },
  {
    id: 2,
    title: 'Chế Độ Ăn Uống Lành Mạnh Cho Người Bị Huyết Áp Cao',
    summary: 'Một chế độ ăn uống cân bằng đóng vai trò quan trọng trong việc kiểm soát huyết áp. Khám phá các loại thực phẩm nên và không nên ăn.',
    imageUrl: 'https://picsum.photos/seed/bloodpressure1/600/400',
    category: 'Huyết Áp',
    categoryColor: 'bg-red-100 text-red-800',
    content: `
      <p>Tăng huyết áp là một trong những yếu tố nguy cơ hàng đầu gây ra bệnh tim và đột quỵ. May mắn là, một chế độ ăn uống lành mạnh có thể giúp kiểm soát và thậm chí hạ huyết áp một cách hiệu quả.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Chế độ ăn DASH</h3>
      <p>Chế độ ăn DASH (Dietary Approaches to Stop Hypertension) là một phương pháp được các chuyên gia y tế khuyến nghị. Nó nhấn mạnh việc tiêu thụ các loại thực phẩm giàu kali, canxi, magie, và chất xơ, đồng thời hạn chế natri (muối), chất béo bão hòa và đường.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Thực phẩm nên ăn</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Rau củ quả:</strong> Chuối, cam, khoai lang, rau bina, bông cải xanh.</li>
        <li><strong>Ngũ cốc nguyên hạt:</strong> Gạo lứt, yến mạch, bánh mì nguyên cám.</li>
        <li><strong>Sản phẩm từ sữa ít béo:</strong> Sữa chua, sữa tươi không đường.</li>
        <li><strong>Protein nạc:</strong> Cá, thịt gà bỏ da, các loại đậu.</li>
        <li><strong>Các loại hạt và hạt:</strong> Hạnh nhân, óc chó, hạt lanh.</li>
      </ul>
       <h3 class="text-2xl font-bold mt-6 mb-3">Thực phẩm cần hạn chế</h3>
       <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Thực phẩm nhiều muối:</strong> Đồ hộp, dưa muối, thức ăn nhanh, thịt chế biến sẵn (xúc xích, thịt xông khói).</li>
        <li><strong>Chất béo bão hòa và chất béo chuyển hóa:</strong> Mỡ động vật, da gia cầm, đồ chiên rán.</li>
        <li><strong>Đường:</strong> Nước ngọt, bánh kẹo, các món tráng miệng nhiều đường.</li>
        <li><strong>Rượu bia:</strong> Uống quá nhiều rượu có thể làm tăng huyết áp.</li>
      </ul>
      <p>Bên cạnh chế độ ăn, việc giảm lượng muối tiêu thụ hàng ngày xuống dưới 2.300mg (khoảng một muỗng cà phê) là một trong những bước quan trọng nhất để kiểm soát huyết áp.</p>
    `,
  },
  {
    id: 3,
    title: 'Tập Thể Dục Hàng Ngày: Chìa Khóa Vàng Cho Sức Khỏe Tim Mạch',
    summary: 'Vận động thể chất đều đặn mang lại nhiều lợi ích không ngờ cho tim mạch, giúp giảm nguy cơ mắc các bệnh liên quan đến huyết áp và tiểu đường.',
    imageUrl: 'https://picsum.photos/seed/health1/600/400',
    category: 'Sức Khỏe Chung',
    categoryColor: 'bg-green-100 text-green-800',
    content: `
      <p>Tập thể dục thường xuyên là một trong những điều tốt nhất bạn có thể làm cho sức khỏe của mình. Nó không chỉ giúp bạn duy trì cân nặng hợp lý mà còn mang lại vô số lợi ích cho hệ tim mạch.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Lợi ích của việc tập thể dục</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Tăng cường sức khỏe tim:</strong> Giúp tim bơm máu hiệu quả hơn.</li>
        <li><strong>Kiểm soát huyết áp:</strong> Giảm huyết áp ở những người bị tăng huyết áp.</li>
        <li><strong>Cải thiện cholesterol:</strong> Tăng cholesterol tốt (HDL) và giảm cholesterol xấu (LDL).</li>
        <li><strong>Giảm nguy cơ tiểu đường:</strong> Giúp cơ thể sử dụng insulin hiệu quả hơn.</li>
        <li><strong>Giảm căng thẳng:</strong> Giải phóng endorphin, giúp cải thiện tâm trạng.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-6 mb-3">Nên tập luyện như thế nào?</h3>
      <p>Hiệp hội Tim mạch Hoa Kỳ khuyến nghị:</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li>Ít nhất <strong>150 phút mỗi tuần</strong> hoạt động aerobic cường độ trung bình (như đi bộ nhanh, đạp xe).</li>
        <li>Hoặc <strong>75 phút mỗi tuần</strong> hoạt động aerobic cường độ mạnh (như chạy bộ, bơi lội).</li>
        <li>Kết hợp với các bài tập tăng cường sức mạnh cơ bắp ít nhất <strong>2 ngày mỗi tuần</strong>.</li>
      </ol>
      <p>Điều quan trọng nhất là tìm một hoạt động bạn yêu thích và biến nó thành một phần thói quen hàng ngày. Ngay cả những thay đổi nhỏ như đi cầu thang bộ thay vì thang máy cũng có thể tạo ra sự khác biệt lớn.</p>
    `
  },
  {
    id: 4,
    title: '5 Dấu Hiệu Sớm Của Bệnh Tiểu Đường Bạn Không Nên Bỏ Qua',
    summary: 'Phát hiện sớm bệnh tiểu đường giúp việc điều trị trở nên dễ dàng và hiệu quả hơn. Tìm hiểu ngay những dấu hiệu cảnh báo quan trọng.',
    imageUrl: 'https://picsum.photos/seed/diabetes2/600/400',
    category: 'Tiểu Đường',
    categoryColor: 'bg-blue-100 text-blue-800',
    content: `
      <p>Bệnh tiểu đường có thể phát triển âm thầm trong nhiều năm mà không có triệu chứng rõ ràng. Tuy nhiên, nhận biết sớm các dấu hiệu cảnh báo có thể giúp bạn tìm kiếm sự chăm sóc y tế kịp thời và ngăn ngừa các biến chứng nghiêm trọng.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Các dấu hiệu cảnh báo sớm</h3>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Đi tiểu thường xuyên:</strong> Khi lượng đường trong máu cao, thận phải làm việc nhiều hơn để loại bỏ đường thừa qua nước tiểu, dẫn đến việc đi tiểu nhiều hơn bình thường.</li>
        <li><strong>Khát nước liên tục:</strong> Đi tiểu nhiều làm cơ thể mất nước, gây ra cảm giác khát không dứt.</li>
        <li><strong>Sụt cân không rõ nguyên nhân:</strong> Cơ thể không thể sử dụng glucose làm năng lượng hiệu quả, nên nó bắt đầu đốt cháy mỡ và cơ bắp, dẫn đến sụt cân dù bạn vẫn ăn uống bình thường.</li>
        <li><strong>Cảm thấy rất đói:</strong> Do các tế bào không nhận được đủ glucose, cơ thể bạn sẽ gửi tín hiệu đói liên tục.</li>
        <li><strong>Mệt mỏi và kiệt sức:</strong> Thiếu năng lượng từ glucose khiến bạn luôn cảm thấy mệt mỏi, uể oải.</li>
      </ol>
      <p>Nếu bạn gặp phải bất kỳ triệu chứng nào trong số này, đặc biệt nếu chúng xuất hiện cùng lúc, hãy đến gặp bác sĩ để được kiểm tra và tư vấn. Việc xét nghiệm máu đơn giản có thể giúp chẩn đoán bệnh tiểu đường một cách chính xác.</p>
    `
  },
  {
    id: 5,
    title: 'Kỹ Thuật Hít Thở Sâu Giúp Giảm Căng Thẳng và Hạ Huyết Áp',
    summary: 'Stress là một trong những nguyên nhân gây tăng huyết áp. Học cách thư giãn với các kỹ thuật hít thở đơn giản mà hiệu quả.',
    imageUrl: 'https://picsum.photos/seed/bloodpressure2/600/400',
    category: 'Huyết Áp',
    categoryColor: 'bg-red-100 text-red-800',
    content: `
      <p>Trong cuộc sống hiện đại, căng thẳng (stress) là điều khó tránh khỏi. Khi căng thẳng, cơ thể giải phóng các hormone như cortisol và adrenaline, làm tim đập nhanh hơn và co thắt các mạch máu, dẫn đến tăng huyết áp tạm thời. Nếu tình trạng này kéo dài, nó có thể góp phần gây ra tăng huyết áp mãn tính.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Tại sao hít thở sâu lại hiệu quả?</h3>
      <p>Hít thở sâu và chậm rãi giúp kích hoạt hệ thần kinh phó giao cảm, là hệ thống "nghỉ ngơi và tiêu hóa" của cơ thể. Điều này giúp làm chậm nhịp tim, thư giãn các mạch máu, và từ đó làm giảm huyết áp.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Bài tập hít thở đơn giản</h3>
      <p>Bạn có thể thực hiện bài tập này ở bất cứ đâu, chỉ cần vài phút mỗi ngày:</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Tìm một nơi yên tĩnh:</strong> Ngồi thoải mái trên ghế với lưng thẳng hoặc nằm xuống.</li>
        <li><strong>Đặt một tay lên bụng:</strong> Để cảm nhận sự phồng lên và xẹp xuống của bụng.</li>
        <li><strong>Hít vào bằng mũi:</strong> Hít vào từ từ và sâu, đếm thầm đến 4. Cảm nhận bụng phồng lên.</li>
        <li><strong>Nín thở:</strong> Giữ hơi thở trong khoảng 1-2 giây.</li>
        <li><strong>Thở ra bằng miệng:</strong> Thở ra từ từ, đếm thầm đến 6. Cảm nhận bụng xẹp xuống.</li>
        <li><strong>Lặp lại:</strong> Thực hiện trong 5-10 phút.</li>
      </ol>
      <p>Việc thực hành hít thở sâu thường xuyên không chỉ giúp kiểm soát huyết áp mà còn cải thiện sự tập trung và mang lại cảm giác bình yên, thư thái.</p>
    `
  },
  {
    id: 6,
    title: 'Giấc Ngủ và Sức Khỏe: Mối Liên Hệ Quan Trọng',
    summary: 'Chất lượng giấc ngủ ảnh hưởng trực tiếp đến sức khỏe tổng thể, bao gồm cả việc kiểm soát đường huyết và huyết áp. Cải thiện giấc ngủ ngay hôm nay!',
    imageUrl: 'https://picsum.photos/seed/health2/600/400',
    category: 'Sức Khỏe Chung',
    categoryColor: 'bg-green-100 text-green-800',
    content: `
      <p>Giấc ngủ không chỉ là thời gian để cơ thể nghỉ ngơi, mà còn là một quá trình phục hồi thiết yếu. Thiếu ngủ hoặc ngủ không đủ giấc có thể gây ra những ảnh hưởng tiêu cực đến sức khỏe thể chất và tinh thần.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">Ảnh hưởng của thiếu ngủ</h3>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Tăng nguy cơ tăng huyết áp:</strong> Thiếu ngủ kéo dài có thể làm tăng huyết áp và nhịp tim.</li>
        <li><strong>Ảnh hưởng đến đường huyết:</strong> Có thể làm giảm độ nhạy của insulin, tăng nguy cơ mắc bệnh tiểu đường type 2.</li>
        <li><strong>Tăng cân:</strong> Gây rối loạn hormone kiểm soát cảm giác đói và no (ghrelin và leptin), khiến bạn ăn nhiều hơn.</li>
        <li><strong>Suy giảm hệ miễn dịch:</strong> Khiến bạn dễ bị ốm hơn.</li>
        <li><strong>Ảnh hưởng đến tâm trạng:</strong> Gây cáu kỉnh, lo lắng và khó tập trung.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-6 mb-3">Mẹo để có giấc ngủ ngon hơn</h3>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li><strong>Thiết lập lịch trình ngủ đều đặn:</strong> Đi ngủ và thức dậy vào cùng một thời điểm mỗi ngày, kể cả cuối tuần.</li>
        <li><strong>Tạo không gian ngủ thoải mái:</strong> Phòng ngủ nên tối, yên tĩnh và mát mẻ.</li>
        <li><strong>Tránh các chất kích thích:</strong> Hạn chế caffeine và nicotine, đặc biệt là vào buổi chiều và tối.</li>
        <li><strong>Tắt các thiết bị điện tử:</strong> Ánh sáng xanh từ điện thoại, TV có thể cản trở việc sản xuất melatonin, hormone gây ngủ.</li>
        <li><strong>Thư giãn trước khi ngủ:</strong> Đọc sách, nghe nhạc nhẹ hoặc tắm nước ấm.</li>
      </ol>
      <p>Người lớn nên ngủ từ 7-9 tiếng mỗi đêm. Đầu tư cho giấc ngủ chính là đầu tư cho sức khỏe lâu dài của bạn.</p>
    `
  },
];