import API from '../../../API/api';

export const createComment = async (token, bucketListId, text, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/comment/${bucketListId}`;
  try {
    // API 요청
    await API.post(endpoint, {
      bucketListId: bucketListId,
      content: text
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // 성공 시 페이지 새로고침 
    window.location.reload();

  } catch (error) {
    console.error('API 오류: ', error);
    alert('댓글 추가에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false); // 로딩 상태 해제
  }
};
